/* eslint-disable no-invalid-this, no-unused-expressions */

/* ----------------------------------------------*\
    Element selectors
\*---------------------------------------------- */

const modalSelector = '[data-ui="modal"]';
const closeButtonSelector = '[data-ui="modal-close"]';

/* ----------------------------------------------*\
    Modal class

    Exports an initialization function
\*---------------------------------------------- */

export class Modal {
  constructor() {
    this.eventListeners = [];
  }

  /* ----------------------------------------------*\
      Handlers
  \*---------------------------------------------- */

  handleClick(event) {
    const trigger = event.target;
    const modalId = trigger.getAttribute('aria-controls');
    const modal = this.modals.find(m => m.id === modalId);

    if (modal) {
      this.showModal(modal);
    }
  }

  handleKeyUp(modal, event) {
    if (event.key !== 'Escape') {
      return;
    }

    this.hideModal(modal);
  }

  hideModal(modal) {
    const overlay = modal.nextElementSibling;

    modal.setAttribute('hidden', 'hidden');
    modal.setAttribute('aria-hidden', true);

    if (overlay) {
      overlay.setAttribute('hidden', 'hidden');
    }

    window.removeEventListener('keyup', this.boundEscapeFn);
  }

  showModal(modal) {
    const overlay = modal.nextElementSibling;
    const closeBtn = modal.querySelector(closeButtonSelector);

    modal.removeAttribute('hidden');
    modal.setAttribute('aria-hidden', false);

    this.attachEscapeListener(modal);

    if (overlay) {
      overlay.removeAttribute('hidden');
    }

    if (closeBtn) {
      closeBtn.focus();
    }
  }

  /* ----------------------------------------------*\
      Event Attachment
  \*---------------------------------------------- */

  attachEventListeners() {
    this.modals.forEach(modal => {
      const modalId = modal.id;
      const closeBtn = modal.querySelector(closeButtonSelector);
      const triggers = document.querySelectorAll(
        `[aria-controls="${modalId}"]`
      );

      if (!modal.hasAttribute('hidden')) {
        // Attach ESC listener is modal is already open
        this.attachEscapeListener(modal);
      }

      if (closeBtn) {
        const hideFn = this.hideModal.bind(this, modal);

        closeBtn.addEventListener('click', hideFn);

        this.eventListeners.push(() => {
          closeBtn.removeEventListener('click', hideFn);
        });
      }

      triggers.forEach(trigger => {
        trigger.addEventListener('click', this.handleClick.bind(this));

        this.eventListeners.push(() => {
          trigger.removeEventListener('click', this.handleClick.bind(this));
        });
      });
    });
  }

  attachEscapeListener(modal) {
    this.boundEscapeFn = this.handleKeyUp.bind(this, modal);

    window.addEventListener('keyup', this.boundEscapeFn);

    this.eventListeners.push(() => {
      window.removeEventListener('keyup', this.boundEscapeFn);
    });
  }

  /* ----------------------------------------------*\
      Setup and cleanup
  \*---------------------------------------------- */

  init() {
    this.modals = [...document.querySelectorAll(modalSelector)];
    this.attachEventListeners();
  }

  cleanup() {
    this.eventListeners.forEach(fn => fn());
  }
}

/* ----------------------------------------------*\
    Initialization
\*---------------------------------------------- */

const singletonMap = {};

const initialize = () => {
  const roots = [...document.querySelectorAll(modalSelector)];

  roots.forEach(rootEl => {
    const rootId = rootEl.id;

    // Ensure only one instance is initialized per root element
    if (!singletonMap[rootId]) {
      singletonMap[rootId] = new Modal(rootEl);
    } else {
      singletonMap[rootId].cleanup();
    }

    singletonMap[rootId].init();
  });
};

export default initialize;
