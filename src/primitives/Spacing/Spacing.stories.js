import spacing from 'spacing.json';

const wrapGrid = input => {
  return `<div class="tsl-doc-grid">${input}</div>`;
};

const insetItem = input => `
<div class="tsl-doc-grid-item tsl-doc-spacing--internal">
  <div class="tsl-spacing-block" style="padding: ${input}px;">
    <div class="tsl-spacing-content"></div>
  </div>
  <div class="tsl-doc-footer">
    <p><strong>Inset ${input}</strong></p>
    <p><code>@include spacing-inset-${input}</code></p>
  </div>
</div>`;

const squishItem = input => `
<div class="tsl-doc-grid-item tsl-doc-spacing--internal">
  <div class="tsl-spacing-block" style="padding: ${input.y}px ${input.x}px;">
    <div class="tsl-spacing-content"></div>
  </div>
  <div class="tsl-doc-footer">
    <p><strong>Squish ${input.y}</strong></p>
    <p><code>@include spacing-squish-${input.y}</code></p>
  </div>
</div>`;

const stackItem = input => `
<div class="tsl-doc-grid-item tsl-doc-spacing--external">
    <div class="tsl-spacing-block--stack">
      <div class="tsl-spacing-content" style="margin-bottom: ${input}px;"></div>
      <div class="tsl-spacing-content"></div>
    </div>
    <div class="tsl-doc-footer">
      <p><strong>Stack ${input}</strong></p>
      <p><code>$spacing-stack-${input}</code></p>
    </div>
</div>`;

const inlineItem = input => `
<div class="tsl-doc-grid-item tsl-doc-spacing--external">
    <div class="tsl-spacing-block--inline">
        <div class="tsl-spacing-content" style="margin-right: ${input}px;"></div>
        <div class="tsl-spacing-content"></div>
    </div>
    <div class="tsl-doc-footer">
      <p><strong>Inline ${input}</strong></p>
      <p><code>$spacing-inline-${input}</code></p>
    </div>
</div>`;

export const inset = () => wrapGrid(spacing.inset.map(insetItem).join(''));
export const squish = () => wrapGrid(spacing.squish.map(squishItem).join(''));
export const stack = () => wrapGrid(spacing.stack.map(stackItem).join(''));
export const inline = () => wrapGrid(spacing.inline.map(inlineItem).join(''));

export default {
  title: 'Primitives / Spacing',
  parameters: {
    options: {
      showPanel: false
    }
  }
};
