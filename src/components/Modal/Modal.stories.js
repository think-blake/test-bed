import initialize from './Modal';

window.addEventListener('load', initialize);

const modal = args => {
  const id = 'example-modal';

  return `
  <div class="tsl-modal" data-ui="modal" id="${id}" role="dialog" aria-labelledby="modal-title" aria-hidden="false" ${
    args.show ? '' : 'hidden'
  }>
    <div class="tsl-card tsl-card-container--border tsl-card-container--with-shadow" role="document">
      <header class="tsl-modal-card-header">
      <button
        class="tsl-btn tsl-btn--icon tsl-btn--medium"
        data-ui="modal-close"
        type="button"
      >
        <svg class="tsl-icon tsl-icon--control" width="16" height="16" viewBox="0 0 16 16">
          <use xlink:href="#icon-close"></use>
        </svg>
        <span class="tsl-accessibly-hidden">Close modal</span>
      </button>
      </header>
      <div class="tsl-modal-card-body">
        <h2 id="modal-title" class="tsl-type-display tsl-type-display--small">${
          args.title
        }</h2>
        <p class="tsl-type-body tsl-type-body--medium">${args.body}</p>
      </div>
    </div>
  </div>
  <div class="tsl-modal-overlay" ${
    args.show ? '' : 'hidden'
  } tabindex="-1"></div>
  `;
};

const Template = args => {
  const id = 'example-modal';

  return `
  <div style="padding: 40px;">
  <p class="tsl-type-body tsl-type-body--medium">Sed porta dolor sem, at hendrerit eros sollicitudin quis. Nulla eget
    faucibus sapien. Cras vulputate cursus velit ac aliquam. Donec quis
    libero lectus. In dictum ligula dapibus justo ultricies, id semper
    libero gravida. Nulla ac vulputate turpis. Nunc eget lacus non nisl
    posuere vulputate non vitae mi. Ut in magna et dolor facilisis mattis
    sit amet vitae lacus. In hac habitasse platea dictumst. Sed eget maximus
    tortor. Etiam eu pellentesque risus. Suspendisse at sollicitudin massa.
    Vivamus quis sapien nec urna dapibus lacinia a a dolor. Suspendisse
    feugiat risus eu est maximus, sit amet tristique neque luctus. 
    <button class="tsl-btn tsl-btn--link tsl-btn--medium" aria-controls="${id}" type="button">Launch modal</button></p>
  <p class="tsl-type-body tsl-type-body--medium">
    Nulla scelerisque, augue eget malesuada placerat, velit turpis varius
    orci, id scelerisque neque ex nec nisi. Ut quis auctor augue, vitae
    laoreet nisi. Maecenas volutpat erat eu nunc ullamcorper, eu ultrices
    nunc volutpat. Sed risus ligula, euismod rhoncus risus vitae, fermentum
    fermentum metus. Maecenas eu velit ullamcorper mauris faucibus pulvinar
    eu sed nulla. Class aptent taciti sociosqu ad litora torquent per
    conubia nostra, per inceptos himenaeos. Proin ipsum sapien, tristique
    sed est at, blandit iaculis odio. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Nam sed commodo lacus, vitae varius purus.
    Etiam sit amet bibendum ante, sed varius nisi. Nunc scelerisque sodales
    ipsum tincidunt pulvinar. Curabitur libero risus, blandit eu molestie
    et, pulvinar ut odio.
  </p>
  <p class="tsl-type-body tsl-type-body--medium">
    Morbi consectetur odio nec libero facilisis, ut gravida tellus tempus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
    dolor sit amet, consectetur adipiscing elit. Nam malesuada urna at leo
    pellentesque, ac accumsan lectus luctus. Donec mollis interdum aliquet.
    Phasellus nec consectetur nisl, luctus posuere erat. Mauris mattis leo a
    aliquam commodo. Pellentesque sed ipsum vehicula, varius orci sit amet,
    tempor sem. Nam ultricies eget ante et dignissim. Nam id suscipit augue.
    Nulla gravida congue massa ut eleifend. Nam mattis molestie risus quis
    fermentum. Etiam condimentum felis at lectus consectetur laoreet.
    Vivamus sit amet ipsum velit.
  </p>
  <p class="tsl-type-body tsl-type-body--medium">
    Praesent facilisis lobortis lectus, eget iaculis enim dignissim euismod.
    In diam eros, laoreet eu sollicitudin quis, vulputate hendrerit massa.
    Integer rutrum, sem vitae viverra vulputate, enim nunc placerat eros,
    eget cursus erat velit eu lectus. Phasellus in laoreet urna. Donec
    vulputate mi sit amet nisl ultricies iaculis. Ut blandit mi eu maximus
    pretium. Phasellus ultricies nisl id turpis vehicula semper. Maecenas
    sed purus pulvinar, vestibulum ante sed, faucibus diam. Donec id aliquet
    tellus. Pellentesque eu erat laoreet nisi accumsan egestas. Donec
    vulputate quam sit amet suscipit lacinia. Vivamus at aliquet nunc. Nunc
    euismod odio ut pharetra aliquet.
  </p>
  <p class="tsl-type-body tsl-type-body--medium">
    In tempus a tortor id sodales. Aliquam erat volutpat. Vestibulum a
    imperdiet eros, ac maximus lacus. Phasellus viverra malesuada augue vel
    euismod. Vestibulum ante ipsum primis in faucibus orci luctus et
    ultrices posuere cubilia curae; Vestibulum ipsum metus, porttitor id
    venenatis eget, vulputate eget lorem. Class aptent taciti sociosqu ad
    litora torquent per conubia nostra, per inceptos himenaeos. Duis at
    scelerisque sapien. Suspendisse eget eleifend odio. Duis pulvinar
    molestie lectus, in viverra libero blandit eget. Vestibulum consectetur,
    felis at venenatis aliquam, mi ligula maximus diam, ac viverra nunc
    massa sed neque.
  </p>
  ${modal(args)}
  </div>
  `;
};

export const Modal = Template.bind({});

export default {
  title: 'Components / Modal',
  args: {
    title: 'Modal Title Goes Here',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet elementum ipsum. Donec vitae metus et ipsum viverra tincidunt. Nam eu mi et massa accumsan vehicula vitae non magna. Aliquam posuere interdum erat, ac egestas ante. Nunc varius tellus metus, a porta orci consectetur vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    show: true
  }
};
