const data = [
  {
    title: '<!-- -->',
    description: 'This tag is used to apply comment in an HTML document.',
    attributes: null,
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<!DOCTYPE>',
    description: 'This tag is used to specify the version of HTML',
    attributes: null,
    separator: null,
    html5: false,
    deprecated: false,
  },

  {
    title: '<a>',
    description:
      'It is termed as anchor tag and it creates a hyperlink or link.',
    attributes: [
      {
        name: 'href',
        description: 'Specifies the URL of the page the link goes to',
        value: 'URL',
      },
      {
        name: 'target',
        description: 'Specifies where to open the linked document',
        value: '_blank, _self, _parent, _top, framename',
      },
      {
        name: 'download',
        description:
          'Specifies that the target will be downloaded when a user clicks on the hyperlink',
        value: 'filename',
      },
      {
        name: 'ping',
        description:
          'Specifies a space-separated list of URLs to which, when the link is followed, post requests with the body ping will be sent by the browser (in the background)',
        value: 'URL',
      },
      {
        name: 'rel',
        description:
          'Specifies the relationship between the current document and the linked document',
        value:
          'alternate, author, bookmark, help, license, next, nofollow, noreferrer, prefetch, prev, search, tag',
      },
      {
        name: 'hreflang',
        description: 'Specifies the language of the linked document',
        value: 'language_code',
      },
      {
        name: 'type',
        description: 'Specifies the MIME type of the linked document',
        value: 'MIME_type',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<abbr>',
    description: 'It defines an abbreviation for a phrase or longer word.',
    attributes: [
      {
        name: 'title',
        description: 'Specifies the full term',
        value: 'text',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },

  {
    title: '<acronym>',
    description: 'It defines acronym for a word. (Not supported in HTML5)',
    attributes: null,
    seperator: null,
    html5: false,
    deprecated: true,
  },
  {
    title: '<address>',
    description:
      "It defines the author's contact information of the HTML article",
    attributes: null,
    seperator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<applet>',
    description: 'It defines an embedded Java applet. (Not supported in HTML5)',
    attributes: null,
    seperator: null,
    html5: false,
    deprecated: true,
  },
  {
    title: '<area>',
    description: 'It defines the area of an image map.',
    attributes: [
      {
        name: 'alt',
        description: 'Specifies an alternate text for the area.',
        value: null,
      },
      {
        name: 'coords',
        description:
          'Specifies the coordinates of the area. The values are numbers that represent the number of pixels from the left or top edge of the image.',
        value: null,
      },
      {
        name: 'download',
        description:
          'Specifies that the target will be downloaded when a user clicks on the hyperlink. The value of the attribute will be used as the name of the downloaded file.',
        value: null,
      },
      {
        name: 'href',
        description: 'Specifies the URL of the page the link goes to.',
        value: null,
      },
      {
        name: 'hreflang',
        description: 'Specifies the language of the linked document.',
        value: null,
      },
      {
        name: 'media',
        description:
          'Specifies the media device to render the linked document on.',
        value: null,
      },
      {
        name: 'rel',
        description:
          'Specifies the relationship between the current document and the linked document.',
        value: null,
      },
      {
        name: 'shape',
        description:
          'Specifies the shape of the area. The supported shapes are "rect", "circle", "poly", and "default".',
        value: null,
      },
      {
        name: 'target',
        description: 'Specifies where to open the linked document.',
        value: null,
      },
      {
        name: 'type',
        description: 'Specifies the MIME type of the linked document.',
        value: null,
      },
    ],
    seperator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<article>',
    description: 'It defines the self-contained content.',
    attributes: [
      {
        name: 'about',
        description:
          'Specifies the URL of the page that describes the subject of the article. This is useful for pages that contain multiple articles.',
        value: null,
      },
      {
        name: 'cite',
        description:
          'Specifies the URL of the page that the article came from.',
        value: null,
      },
      {
        name: 'pubdate',
        description: 'Specifies the publication date of the article.',
        value: null,
      },
    ],
    seperator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<aside>',
    description:
      'It defines the content aside from the content it is placed in.',
    attributes: null,
    seperator: null,
    html5: true,
    deprecated: false,
  },

  {
    title: '<audio>',
    description:
      '\n            It is used to embed sound content in HTML document.\n          ',
    seperator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: null,
    description: null,
    seperator: 'B',
    html5: false,
  },
  {
    title: '<b>',
    description: 'It is used to make a text bold.',
    seperator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<base>',
    description:
      '\n            This tag defines the base URL for all relative URL within the\n            document.\n          ',
    seperator: null,
    html5: false,
    deprecated: false,
  },

  {
    title: '<audio>',
    description:
      '\n            It is used to embed sound content in HTML document.\n          ',
    seperator: null,
    html5: true,
    deprecated: false,
    attributes: [
      {
        name: 'autoplay',
        description:
          'Specifies that the audio will start playing as soon as it is ready.',
        value: null,
      },
      {
        name: 'controls',
        description:
          'Specifies that audio controls should be displayed (such as a play/pause button etc).',
        value: null,
      },
      {
        name: 'loop',
        description:
          'Specifies that the audio will start over again, every time it is finished.',
        value: null,
      },
      {
        name: 'muted',
        description:
          'Specifies that the audio output should be muted by default.',
        value: null,
      },
      {
        name: 'preload',
        description:
          'Specifies if and how the author thinks the audio should be loaded when the page loads.',
        value: 'auto | metadata | none',
      },
      {
        name: 'src',
        description: 'Specifies the URL of the audio file.',
        value: null,
      },
    ],
  },

  {
    title: '<b>',
    description: 'It is used to make a text bold.',
    seperator: null,
    html5: false,
    deprecated: false,
    attributes: null,
  },
  {
    title: '<base>',
    description:
      'This tag defines the base URL for all relative URL within the document.',
    seperator: null,
    html5: false,
    deprecated: false,
    attributes: [
      {
        name: 'href',
        description:
          'Specifies the base URL for all relative URLs in the page.',
        value: null,
      },
      {
        name: 'target',
        description:
          'Specifies the default target for all hyperlinks and forms in the page.',
        value: null,
      },
    ],
  },

  {
    title: '<basefont>',
    description:
      '\nThis tag is used to set default font, size and color for all\nelements of document. (Not supported in HTML5)',
    seperator: null,
    html5: false,
    deprecated: true,
    attributes: null,
  },
  {
    title: '<bdi>',
    description:
      '\nThis tag is used to provide isolation for that part of text which\nmay be formatted in different directions from its surrounding\ntext.\n',
    seperator: null,
    html5: true,
    deprecated: false,
    attributes: ['dir'],
  },
  {
    title: '<bdo>',
    description: '\nIt is used to override the current text direction.\n',
    seperator: null,
    html5: false,
    deprecated: false,
    attributes: ['dir'],
  },
  {
    title: '<big>',
    description:
      'This tag is used to make font size one level larger than its surrounding content. (Not supported in HTML5)',
    separator: null,
    html5: false,
    deprecated: true,
    attributes: null,
  },
  {
    title: '<blockquote>',
    description:
      'It is used to define a content which is taken from another source.',
    separator: null,
    html5: false,
    deprecated: false,
    attributes: [
      {
        name: 'cite',
        description: 'Specifies the URL of the source',
        value: 'URL',
      },
    ],
  },
  {
    title: '<body>',
    description: 'It is used to define the body section of an HTML document.',
    separator: null,
    html5: false,
    deprecated: false,
    attributes: [
      {
        name: 'onafterprint',
        description: 'Script to be run after the document is printed',
        value: 'script',
      },
      {
        name: 'onbeforeprint',
        description: 'Script to be run before the document is printed',
        value: 'script',
      },
      {
        name: 'onbeforeunload',
        description:
          'Script to be run when the document is about to be unloaded',
        value: 'script',
      },
      {
        name: 'onhashchange',
        description:
          'Script to be run when there has been changes to the anchor part of the URL',
        value: 'script',
      },
      {
        name: 'onlanguagechange',
        description:
          'Script to be run when the user changes the preferred language',
        value: 'script',
      },
      {
        name: 'onload',
        description: 'Script to be run when the document is finished loading',
        value: 'script',
      },
      {
        name: 'onmessage',
        description:
          'Script to be run when the document receives a message from a parent window or a child frame',
        value: 'script',
      },
      {
        name: 'onoffline',
        description: 'Script to be run when the document goes offline',
        value: 'script',
      },
      {
        name: 'ononline',
        description: 'Script to be run when the document comes online',
        value: 'script',
      },
      {
        name: 'onpopstate',
        description: "Script to be run when the window's history changes",
        value: 'script',
      },
      {
        name: 'onredo',
        description: 'Script to be run when the user performs an "undo" action',
        value: 'script',
      },
      {
        name: 'onresize',
        description: 'Script to be run when the window is resized',
        value: 'script',
      },
      {
        name: 'onstorage',
        description: 'Script to be run when a Web Storage area is updated',
        value: 'script',
      },
      {
        name: 'onundo',
        description: 'Script to be run when the user performs a "redo" action',
        value: 'script',
      },
      {
        name: 'onunload',
        description:
          'Script to be run when the document is about to be unloaded',
        value: 'script',
      },
    ],
  },
  {
    title: '<br>',
    description: 'It is used to apply single line break.',
    separator: null,
    html5: false,
    deprecated: false,
    attributes: null,
  },

  {
    title: '<button>',
    description: 'It is used to represent a clickable button',
    attributes: [
      {
        name: 'autofocus',
        description:
          'Specifies that the button should automatically get focus when the page loads',
        value: 'autofocus',
      },
      {
        name: 'disabled',
        description: 'Specifies that the button should be disabled',
        value: 'disabled',
      },
      {
        name: 'form',
        description: 'Specifies one or more forms the button belongs to',
        value: 'form_id',
      },
      {
        name: 'formaction',
        description:
          'Specifies the URL of the file that will process the input control when the form is submitted',
        value: 'url',
      },
      {
        name: 'formenctype',
        description:
          'Specifies how the form-data should be encoded when submitting it to the server (only for method="post")',
        value:
          'application/x-www-form-urlencoded|multipart/form-data|text/plain',
      },
      {
        name: 'formmethod',
        description: 'Specifies the HTTP method to use when sending form-data',
        value: 'get|post',
      },
      {
        name: 'formnovalidate',
        description:
          'Specifies that the form-data should not be validated on submission',
        value: 'formnovalidate',
      },
      {
        name: 'formtarget',
        description:
          'Specifies where to display the response after submitting the form',
        value: '_blank|_self|_parent|_top|framename',
      },
      {
        name: 'name',
        description: 'Specifies a name for the button',
        value: 'text',
      },
      {
        name: 'type',
        description: 'Specifies the type of button',
        value: 'button|reset|submit',
      },
      {
        name: 'value',
        description: 'Specifies the value of the button',
        value: 'text',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },

  {
    title: '<canvas>',
    description:
      'It is used to provide a graphics space within a web document.',
    attributes: [
      {
        name: 'height',
        description: 'Specifies the height of the canvas',
        value: 'pixels|percentage',
      },
      {
        name: 'width',
        description: 'Specifies the width of the canvas',
        value: 'pixels|percentage',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<caption>',
    description: 'It is used to define a caption for a table.',
    attributes: null,
    separator: null,
    html5: false,
    deprecated: false,
  },

  {
    title: '<center>',
    description:
      '\n            It is used to align the content in center.\n            (Not supported in HTML5)',
    separator: null,
    html5: false,
    deprecated: true,
    attributes: [],
  },
  {
    title: '<cite>',
    description:
      '\n            It is used to define the title of a work, such as a book, a song, or a movie.\n          ',
    attributes: [
      {
        name: 'title',
        description: 'Specifies the title of the work',
        value: 'text',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<code>',
    description:
      '\n            It is used to display a part of programming code in an HTML\n            document.\n          ',
    separator: null,
    html5: false,
    deprecated: false,
    attributes: [],
  },
  {
    title: '<col>',
    description:
      '\n            It defines a column within a table which represent common\n            properties of columns and used with the <colgroup> element.\n          ',
    separator: null,
    html5: false,
    deprecated: false,
    attributes: [
      {
        name: 'span',
        description:
          'Specifies the number of columns a <col> element should span',
        value: 'number',
      },
      {
        name: 'width',
        description: 'Specifies the width of the column',
        value: 'length',
      },
    ],
  },
  {
    title: '<colgroup>',
    description:
      '\n            It is used to define group of columns in a table.\n          ',
    separator: null,
    html5: false,
    deprecated: false,
    attributes: [
      {
        name: 'span',
        description:
          'Specifies the number of columns a <colgroup> element should span',
        value: 'number',
      },
      {
        name: 'width',
        description: 'Specifies the width of the column group',
        value: 'length',
      },
    ],
  },

  {
    title: '<data>',
    description:
      'It is used to link the content with the machine-readable translation.',
    attributes: [
      {
        name: 'value',
        description: 'Specifies the value of the content',
        value: 'text',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<datalist>',
    description: 'It is used to provide a predefined list for input option.',
    attributes: [
      {
        name: 'id',
        description: 'Specifies a unique id for the element',
        value: 'text',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<dd>',
    description:
      'It is used to provide definition/description of a term in description list.',
    attributes: null,
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<del>',
    description: 'It defines a text which has been deleted from the document.',
    attributes: [
      {
        name: 'cite',
        description:
          'Specifies the URL of the document that explains the reason for the change',
        value: 'url',
      },
      {
        name: 'datetime',
        description: 'Specifies the date and time when the text was deleted',
        value: 'YYYY-MM-DDThh:mm:ss+hh:mm',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<details>',
    description:
      'It defines additional details which user can either view or hide.',
    attributes: [
      {
        name: 'open',
        description:
          'Specifies whether the details should be visible to the user on page load.',
        value: 'open',
      },
    ],
    seperator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<dfn>',
    description:
      'It is used to indicate a term which is defined within a sentence/phrase.',
    attributes: null,
    seperator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<dialog>',
    description: 'It defines a dialog box or other interactive components.',
    attributes: [
      {
        name: 'open',
        description:
          'Specifies whether the dialog box should be visible to the user on page load.',
        value: 'open',
      },
    ],
    seperator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<dir>',
    description:
      'It is used as container for directory list of files. (Not supported in HTML5)',
    attributes: null,
    seperator: null,
    html5: false,
    deprecated: true,
  },
  {
    title: '<div>',
    description: 'It defines a division or section within HTML document.',
    attributes: null,
    seperator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<dl>',
    description: 'It is sued to define a description list.',
    attributes: [
      {
        name: 'compact',
        description: 'Specifies whether the list should be compact or not.',
        value: 'compact',
      },
    ],
    seperator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<dt>',
    description:
      '\n            It is used to define a term in description list.\n          ',
    attributes: null,
    seperator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<em>',
    description:
      '\n            It is used to emphasis the content applied within this element.\n          ',
    attributes: null,
    seperator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<embed>',
    description:
      '\n            It is used as embedded container for external\n            file/application/media, etc.\n          ',
    attributes: [
      {
        name: 'src',
        description: 'Specifies the URL of the content to be embedded',
        value: 'URL',
      },
      {
        name: 'type',
        description: 'Specifies the media type of the content',
        value: 'media_type',
      },
      {
        name: 'width',
        description: 'Specifies the width of the embedded content',
        value: 'pixels',
      },
      {
        name: 'height',
        description: 'Specifies the height of the embedded content',
        value: 'pixels',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<fieldset>',
    description:
      '\n            It is used to group related elements/labels within a web form.\n          ',
    attributes: [
      {
        name: 'disabled',
        description: 'Specifies that the fieldset should be disabled',
        value: 'disabled',
      },
      {
        name: 'form',
        description: 'Specifies one or more forms the fieldset belongs to',
        value: 'form_id',
      },
      {
        name: 'name',
        description: 'Specifies a name for the fieldset',
        value: 'text',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<figcaption>',
    description:
      '\n            It is used to add a caption or explanation for the <figure>\n            element.\n          ',
    attributes: [],
    separator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<figure>',
    description:
      '\n            It is used to define the self-contained content, and s mostly\n            refer as single unit.\n          ',
    attributes: [
      {
        name: 'class',
        description: 'Specifies one or more class names for the figure',
        value: 'class_name',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<font>',
    description:
      '\n            It defines the font, size, color, and face for the content.\n            (Not supported in HTML5)',
    attributes: [],
    separator: null,
    html5: false,
    deprecated: true,
  },
  {
    title: '<footer>',
    description:
      '\n            It defines the footer section of a webpage.\n          ',
    seperator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<footer>',
    description: '\n It defines the footer section of a webpage.\n ',
    attributes: [],
    html5: true,
    deprecated: false,
  },
  {
    title: '<form>',
    description: 'It is used to define an HTML form.',
    attributes: [
      {
        name: 'accept-charset',
        description:
          'Specifies the character encoding used in the submitted form data',
        value: 'character_set',
      },
      {
        name: 'action',
        description:
          'Specifies where to send the form-data when a form is submitted',
        value: 'URL',
      },
      {
        name: 'autocomplete',
        description:
          'Specifies whether a form should have autocomplete on or off',
        value: 'on | off',
      },
      {
        name: 'enctype',
        description:
          'Specifies how form-data should be encoded before sending it to a server',
        value:
          'application/x-www-form-urlencoded | multipart/form-data | text/plain',
      },
      {
        name: 'method',
        description: 'Specifies the HTTP method to use when sending form-data',
        value: 'get | post',
      },
      {
        name: 'name',
        description: 'Specifies a name for a form',
        value: 'name',
      },
      {
        name: 'novalidate',
        description:
          'Specifies that a form should not be validated when submitted',
        value: 'novalidate',
      },
      {
        name: 'target',
        description:
          'Specifies where to display the response that is received after submitting the form',
        value: '_blank | _self | _parent | _top | framename',
      },
    ],
    html5: false,
    deprecated: false,
  },
  {
    title: '<frame>',
    description:
      'It defines a particular area of a webpage which can contain another HTML file. (Not supported in HTML5)',
    attributes: [
      {
        name: 'src',
        description: 'Specifies the URL of the document to be loaded',
        value: 'URL',
      },
      {
        name: 'name',
        description: 'Specifies the name of the frame',
        value: 'text',
      },
      {
        name: 'scrolling',
        description: 'Specifies whether or not to display scrollbars',
        value: 'yes/no/auto',
      },
      {
        name: 'noresize',
        description: 'Specifies that the frame cannot be resized by the user',
        value: 'noresize',
      },
      {
        name: 'frameborder',
        description:
          'Specifies whether or not to display a border around the frame',
        value: '1/0',
      },
    ],
    separator: null,
    html5: false,
    deprecated: true,
  },
  {
    title: '<frameset>',
    description:
      'It defines a group of frames in which to display HTML documents. (Not supported in HTML5)',
    attributes: [
      {
        name: 'cols',
        description: 'Specifies the width of each frame column',
        value: 'pixels/percentage',
      },
      {
        name: 'rows',
        description: 'Specifies the height of each frame row',
        value: 'pixels/percentage',
      },
      {
        name: 'border',
        description: 'Specifies the width of the border around frameset',
        value: 'pixels',
      },
      {
        name: 'frameborder',
        description:
          'Specifies whether or not to display a border around each frame',
        value: '1/0',
      },
      {
        name: 'framespacing',
        description:
          'Specifies the amount of space to be displayed between frames',
        value: 'pixels',
      },
    ],
    separator: null,
    html5: false,
    deprecated: true,
  },
  {
    title: '<h1> to <h6>',
    description:
      '\n            It defines headings for an HTML document from level 1 to level 6.\n          ',
    seperator: null,
    html5: false,
    deprecated: false,
    attributes: [],
  },
  {
    title: '<head>',
    description: '\nIt defines the head section of an HTML document.\n',
    attributes: null,
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<header>',
    description: '\nIt defines the header of a section or webpage.\n',
    attributes: [
      {
        name: 'align',
        description: 'Specifies the horizontal alignment of the element',
        value: 'left|center|right',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<hr>',
    description:
      '\nIt is used to apply thematic break between paragraph-level elements.\n',
    attributes: [
      {
        name: 'align',
        description: 'Specifies the alignment of the element',
        value: 'left|center|right',
      },
      {
        name: 'color',
        description: 'Specifies the color of the rule',
        value: 'rgb(x,x,x)|#xxxxxx|color_name',
      },
      {
        name: 'noshade',
        description: 'Indicates that the rule should be drawn as a solid color',
        value: null,
      },
      {
        name: 'size',
        description: 'Specifies the height of the rule',
        value: 'pixels',
      },
      {
        name: 'width',
        description: 'Specifies the width of the rule',
        value: 'pixels',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<html>',
    description: 'It represents the root of an HTML document.',
    attributes: [
      {
        name: 'manifest',
        description:
          "Specifies the address of the document's cache manifest. (Deprecated in HTML5)",
        value: 'URL',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<i>',
    description: 'It is used to represent a text in some different voice.',
    attributes: [
      {
        name: 'title',
        description: 'Specifies extra information about the element content.',
        value: 'text',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<iframe>',
    description: 'It defines an inline frame which can embed other content.',
    attributes: [
      {
        name: 'src',
        description:
          'Specifies the URL of the document to embed in the <iframe>. ',
        value: 'URL',
      },
      {
        name: 'width',
        description: 'Specifies the width of the <iframe> element, in pixels.',
        value: 'number',
      },
      {
        name: 'height',
        description: 'Specifies the height of the <iframe> element, in pixels.',
        value: 'number',
      },
      {
        name: 'frameborder',
        description:
          'Specifies whether or not to display a border around an <iframe> element. (Deprecated in HTML5)',
        value: '1|0',
      },
      {
        name: 'sandbox',
        description:
          'Enables an extra set of restrictions for the content in an <iframe> element. (Deprecated in HTML5)',
        value:
          'allow-same-origin | allow-top-navigation | allow-forms | allow-scripts | allow-popups | allow-modals | allow-orientation-lock | allow-pointer-lock | allow-presentation',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<img>',
    description: 'It is used to insert an image within an HTML document.',
    attributes: [
      {
        name: 'src',
        description: 'Specifies the URL of the image',
        value: 'URL',
      },
      {
        name: 'alt',
        description: 'Specifies an alternate text for the image',
        value: 'text',
      },
      {
        name: 'width',
        description: 'Specifies the width of the image (in pixels)',
        value: 'number',
      },
      {
        name: 'height',
        description: 'Specifies the height of the image (in pixels)',
        value: 'number',
      },
      {
        name: 'usemap',
        description: 'Specifies an image as a client-side image-map',
        value: '#mapname',
      },
      {
        name: 'ismap',
        description: 'Specifies an image as a server-side image-map',
        value: null,
      },
      {
        name: 'loading',
        description: 'Specifies how the browser should load the image',
        value: 'lazy|eager|auto',
      },
      {
        name: 'referrerpolicy',
        description: 'Specifies which referrer information to send',
        value:
          'no-referrer|no-referrer-when-downgrade|origin|origin-when-cross-origin|unsafe-url',
      },
      {
        name: 'crossorigin',
        description: 'Specifies how the element handles cross-origin requests',
        value: 'anonymous|use-credentials',
      },
      {
        name: 'decoding',
        description: 'Specifies the decoding method of the image',
        value: 'async|auto|sync',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<input>',
    description: 'It defines an input field within an HTML form.',
    attributes: [
      {
        name: 'accept',
        description:
          'Specifies the types of files that the server accepts (only for type="file")',
        value: 'MIME_type',
      },
      {
        name: 'align',
        description:
          'Not supported in HTML5. Specifies the alignment of an <input> element according to surrounding elements',
        value: 'left|right|top|middle|bottom',
      },
      {
        name: 'alt',
        description:
          'Specifies an alternate text for the image (only for type="image")',
        value: 'text',
      },
      {
        name: 'checked',
        description:
          'Specifies that an <input> element should be pre-selected when the page loads (for type="checkbox" or type="radio")',
        value: null,
      },
      {
        name: 'disabled',
        description: 'Specifies that an <input> element should be disabled',
        value: null,
      },
      {
        name: 'maxlength',
        description:
          'Specifies the maximum number of characters allowed in an <input> element',
        value: 'number',
      },
      {
        name: 'name',
        description: 'Specifies the name of an <input> element',
        value: 'text',
      },
      {
        name: 'readonly',
        description: 'Specifies that an input field is read-only',
        value: null,
      },
      {
        name: 'size',
        description:
          'Not supported in HTML5. Specifies the width of an <input> element (in characters)',
        value: 'number',
      },
      {
        name: 'src',
        description:
          'Not supported in HTML5. Specifies the URL of the image to display as a background image for an <input> element',
        value: 'URL',
      },
      {
        name: 'type',
        description: 'Specifies the type of an <input> element',
        value:
          'text|password|radio|checkbox|submit|reset|file|hidden|image|button',
      },
      {
        name: 'value',
        description: 'Specifies the value of an <input> element',
        value: 'text',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<ins>',
    description:
      'It represents text that has been inserted within an HTML document.',
    attributes: [
      {
        name: 'cite',
        description:
          'Specifies the URL of the document from which the text was inserted',
        value: 'URL',
      },
      {
        name: 'datetime',
        description: 'Specifies the date and time when the text was inserted',
        value: 'date_time',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<isindex>',
    description:
      'It is used to display search string for current document.\n(Not supported in HTML5)',
    attributes: null,
    separator: null,
    html5: false,
    deprecated: true,
  },
  {
    title: '<kbd>',
    description: 'It is used to define keyboard input.',
    attributes: null,
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<label>',
    description: 'It defines a text label for the input field of form.',
    attributes: [
      {
        name: 'accesskey',
        description: 'Specifies a shortcut key to activate the input field',
        value: 'character',
      },
      {
        name: 'for',
        description: 'Specifies which form element a label is bound to',
        value: 'element_id',
      },
      {
        name: 'form',
        description: 'Specifies the form the input field belongs to',
        value: 'form_id',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<legend>',
    description: 'It defines a caption for content of <fieldset>',
    attributes: null,
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<li>',
    description: 'It is used to represent items in list.',
    attributes: [
      {
        name: 'value',
        description: 'Specifies the value of a list item',
        value: 'number',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<link>',
    description:
      'It represents a relationship between current document and an external resource.',
    attributes: [
      {
        name: 'href',
        description: 'Specifies the URL of the linked resource',
        value: 'URL',
      },
      {
        name: 'hreflang',
        description: 'Specifies the language of the linked resource',
        value: 'language_code',
      },
      {
        name: 'media',
        description:
          'Specifies the media device the linked document will be displayed on',
        value: 'media_query',
      },
      {
        name: 'rel',
        description:
          'Specifies the relationship between the current document and the linked document',
        value: 'alternate/author/stylesheet',
      },
      {
        name: 'sizes',
        description: 'Specifies the size of the icon for the linked document',
        value: 'pixels',
      },
      {
        name: 'type',
        description: 'Specifies the MIME type of the linked resource',
        value: 'MIME_type',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<main>',
    description: '\nIt represents the main content of an HTML document.\n',
    attributes: [
      {
        name: 'align',
        description:
          'Not supported in HTML5. Specifies the alignment of an element',
        value: 'left|center|right|justify|char',
      },
    ],
    seperator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<map>',
    description: '\nIt defines an image map with active areas.\n',
    attributes: [
      {
        name: 'name',
        description: 'Specifies a name for the image map',
        value: 'text',
      },
    ],
    seperator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<mark>',
    description: 'It represents a highlighted text.',
    attributes: null,
    seperator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<marquee>',
    description:
      '\n            It is used to insert the scrolling text or an image either\n            horizontally or vertically.\n            (Not supported in HTML5)',
    separator: null,
    html5: false,
    deprecated: true,
    attributes: [
      {
        name: 'behavior',
        description: 'Specifies the scrolling behavior',
        value: 'scroll|slide|alternate',
      },
      {
        name: 'bgcolor',
        description: 'Specifies the background color of marquee element',
        value: 'color',
      },
      {
        name: 'direction',
        description: 'Specifies the direction of the scrolling content',
        value: 'up|down|left|right',
      },
      {
        name: 'height',
        description: 'Specifies the height of marquee element',
        value: 'pixels',
      },
      {
        name: 'hspace',
        description: 'Specifies the horizontal space around marquee element',
        value: 'pixels',
      },
      {
        name: 'loop',
        description: 'Specifies how many times the marquee element will loop',
        value: 'number',
      },
      {
        name: 'scrollamount',
        description: 'Specifies the speed of the scrolling content',
        value: 'pixels',
      },
      {
        name: 'scrolldelay',
        description: 'Specifies the delay between each scrolling iteration',
        value: 'milliseconds',
      },
      {
        name: 'truespeed',
        description:
          'Specifies whether the scrolling speed is maintained or it is adjusted to the processor speed',
        value: 'true|false',
      },
      {
        name: 'vspace',
        description: 'Specifies the vertical space around marquee element',
        value: 'pixels',
      },
      {
        name: 'width',
        description: 'Specifies the width of marquee element',
        value: 'pixels',
      },
    ],
  },
  {
    title: '<menu>',
    description:
      '\n            It is used for creating a menu list of commands.\n          ',
    separator: null,
    html5: false,
    deprecated: false,
    attributes: [
      {
        name: 'label',
        description: 'Specifies the label for the group of menu items',
        value: 'text',
      },
      {
        name: 'type',
        description: 'Specifies the type of menu to be shown',
        value: 'context|toolbar',
      },
    ],
  },
  {
    title: '<meta>',
    description: 'It defines metadata of an HTML document.',
    separator: null,
    html5: false,
    deprecated: false,
    attributes: [
      {
        name: 'charset',
        description: 'Specifies the character encoding for the HTML document',
        value: 'character_set_name',
      },
      {
        name: 'content',
        description:
          'Specifies the value associated with the name or http-equiv attribute',
        value: 'text',
      },
      {
        name: 'http-equiv',
        description:
          'Specifies the HTTP header that should be included in the response from the server',
        value: 'content-type|expires|refresh|set-cookie',
      },
      {
        name: 'name',
        description: 'Specifies the name of the metadata',
        value: 'author|description|keywords|viewport',
      },
    ],
  },
  {
    title: '<meter>',
    description:
      'It defines scalar measurement with known range or fractional value.',
    attributes: [
      {
        name: 'value',
        description: 'Specifies the current value for the meter.',
        value: 'number',
      },
      {
        name: 'min',
        description: 'Specifies the minimum value for the meter.',
        value: 'number',
      },
      {
        name: 'max',
        description: 'Specifies the maximum value for the meter.',
        value: 'number',
      },
      {
        name: 'low',
        description:
          'Specifies the range that is considered to be a low value.',
        value: 'number',
      },
      {
        name: 'high',
        description:
          'Specifies the range that is considered to be a high value.',
        value: 'number',
      },
      {
        name: 'optimum',
        description: 'Specifies the optimal value for the meter.',
        value: 'number',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<nav>',
    description: 'It represents section of page to represent navigation links.',
    attributes: [
      {
        name: 'accesskey',
        description: 'Specifies a shortcut key to activate/focus an element.',
        value: 'character',
      },
      {
        name: 'role',
        description: 'Specifies the role of the element.',
        value: 'abstract',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<noframes>',
    description:
      'It provides alternate content to represent in browser which does not support the <frame> elements. (Not supported in HTML5)',
    attributes: null,
    separator: null,
    html5: false,
    deprecated: true,
  },
  {
    title: '<noscript>',
    description:
      'It provides an alternative content if a script type is not supported in browser.',
    attributes: null,
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<object>',
    description: 'It is used to embed an object in HTML file.',
    attributes: [
      {
        name: 'data',
        description:
          'Specifies the URL of the resource to be used by the object.',
        value: 'URL',
      },
      {
        name: 'type',
        description: 'Specifies the MIME type of the resource.',
        value: 'MIME_type',
      },
      {
        name: 'width',
        description: 'Specifies the width of the object.',
        value: 'pixels',
      },
      {
        name: 'height',
        description: 'Specifies the height of the object.',
        value: 'pixels',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<ol>',
    description: 'It defines an ordered list of items.',
    attributes: [
      {
        name: 'start',
        description: 'Specifies the start value of the ordered list.',
        value: 'number',
      },
      {
        name: 'type',
        description: 'Specifies the kind of marker to use in the ordered list.',
        value: '1|A|a|I|i',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<optgroup>',
    description: 'It is used to group the options of a drop-down list.',
    attributes: [
      {
        name: 'disabled',
        description: 'Specifies that the option group is disabled',
        value: 'disabled',
      },
      {
        name: 'label',
        description: 'Specifies a label for the option group',
        value: 'text',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<option>',
    description: 'It is used to define options or items in a drop-down list.',
    attributes: [
      {
        name: 'disabled',
        description: 'Specifies that the option should be disabled',
        value: 'disabled',
      },
      {
        name: 'label',
        description: 'Specifies a shorter label for the option',
        value: 'text',
      },
      {
        name: 'selected',
        description: 'Specifies that the option should be pre-selected',
        value: 'selected',
      },
      {
        name: 'value',
        description: 'Specifies the value to be sent to a server',
        value: 'text',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<output>',
    description:
      'It is used as container element which can show result of a calculation.',
    attributes: [
      {
        name: 'for',
        description:
          'Specifies the relationship between the result of the calculation and the elements used in the calculation',
        value: 'IDREF',
      },
      {
        name: 'form',
        description:
          'Specifies one or more forms the output element belongs to',
        value: 'IDREFS',
      },
      {
        name: 'name',
        description: 'Specifies a name for the output element',
        value: 'text',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<p>',
    description: 'It represents a paragraph in an HTML document.',
    attributes: [
      {
        name: 'align',
        description: 'Specifies the horizontal alignment of the element',
        value: 'left|center|right|justify|char',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },

  {
    title: '<param>',
    description: 'It defines parameter for an <object> element',
    attributes: [
      {
        name: 'name',
        description: 'Specifies name of the parameter',
        value: 'text',
      },
      {
        name: 'value',
        description: 'Specifies value of the parameter',
        value: 'text',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<picture>',
    description:
      'It defines more than one source element and one image element.',
    attributes: [
      {
        name: 'srcset',
        description: 'Specifies the URL of the image to use',
        value: 'URL',
      },
      {
        name: 'sizes',
        description: 'Specifies the size of the image to use',
        value: 'media_condition',
      },
      {
        name: 'type',
        description:
          'Specifies the MIME type of the image. Required if the URL is a data URI',
        value: 'MIME_type',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<pre>',
    description: 'It defines preformatted text in an HTML document.',
    attributes: null,
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<progress>',
    description:
      '\n            It defines the progress of a task within HTML document.\n          ',
    attributes: [
      {
        name: 'value',
        description: 'Specifies the current value of the progress',
        value: 'number',
      },
      {
        name: 'max',
        description: 'Specifies the maximum value of the progress',
        value: 'number',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },

  {
    title: '<q>',
    description: 'It defines short inline quotation.',
    attributes: [
      {
        name: 'cite',
        description: 'Specifies the source of the quotation',
        value: 'url',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },

  {
    title: '<rp>',
    description:
      '\n            It defines an alternative content if browser does not supports\n            ruby annotations.\n          ',
    attributes: null,
    separator: null,
    html5: true,
    deprecated: false,
  },

  {
    title: '<abbr>',
    description: 'It defines an abbreviation for a phrase or longer word.',
    attributes: [
      {
        name: 'title',
        description: 'Specifies the full term',
        value: 'text',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<rt>',
    description:
      'It defines explanations and pronunciations in ruby annotations.',
    attributes: [],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<ruby>',
    description: 'It is used to represent ruby annotations.',
    attributes: [],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<s>',
    description: 'It render text which is no longer correct or relevant.',
    attributes: [],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<samp>',
    description: 'It is used to represent sample output of a computer program.',
    attributes: [],
    separator: null,
    html5: false,
    deprecated: false,
  },

  {
    title: '<script>',
    description: 'It is used to declare the JavaScript within HTML document.',
    attributes: [
      {
        name: 'async',
        description:
          'Specifies that the script should be executed asynchronously',
        value: null,
      },
      {
        name: 'charset',
        description: 'Specifies the character encoding used in the script',
        value: 'character_encoding',
      },
      {
        name: 'defer',
        description:
          'Specifies that the script should be executed after the page has been parsed',
        value: null,
      },
      {
        name: 'src',
        description: 'Specifies the URL of the external script file',
        value: 'URL',
      },
      {
        name: 'type',
        description: 'Specifies the MIME type of the script',
        value: 'MIME_type',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<section>',
    description: 'It defines a generic section for a document.',
    attributes: [
      {
        name: 'accesskey',
        description: 'Specifies a shortcut key to activate/focus an element',
        value: 'character',
      },
      {
        name: 'class',
        description: 'Specifies one or more class names for an element',
        value: 'classname',
      },
      {
        name: 'contenteditable',
        description:
          'Specifies whether the content of an element is editable or not',
        value: 'true/false',
      },
      {
        name: 'data-*',
        description:
          'Used to store custom data private to the page or application',
        value: 'value',
      },
      {
        name: 'dir',
        description:
          'Specifies the text direction for the content in an element',
        value: 'ltr/rtl/auto',
      },
      {
        name: 'hidden',
        description:
          'Specifies that an element is not yet, or is no longer, relevant',
        value: null,
      },
      {
        name: 'id',
        description: 'Specifies a unique id for an element',
        value: 'id_name',
      },
      {
        name: 'lang',
        description: "Specifies the language of the element's content",
        value: 'language_code',
      },
      {
        name: 'spellcheck',
        description:
          'Specifies whether the element is to have its spelling and grammar checked or not',
        value: 'true/false',
      },
      {
        name: 'style',
        description: 'Specifies an inline CSS style for an element',
        value: 'CSS_style',
      },
      {
        name: 'tabindex',
        description: 'Specifies the tabbing order of an element',
        value: 'number',
      },
      {
        name: 'title',
        description: 'Specifies extra information about an element',
        value: 'text',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },

  {
    title: '<select>',
    description:
      '\n It represents a control which provides a menu of options.\n ',
    attributes: [
      {
        name: 'autofocus',
        description:
          'Specifies that a drop-down list should automatically get focus when the page loads',
        value: 'autofocus',
      },
      {
        name: 'disabled',
        description: 'Specifies that a drop-down list should be disabled',
        value: 'disabled',
      },
      {
        name: 'form',
        description:
          'Specifies one or more forms the drop-down list belongs to',
        value: 'form_id',
      },
      {
        name: 'multiple',
        description: 'Specifies that multiple options can be selected at once',
        value: 'multiple',
      },
      {
        name: 'name',
        description: 'Specifies a name for the drop-down list',
        value: 'name',
      },
      {
        name: 'required',
        description:
          'Specifies that the user is required to select a value before submitting the form',
        value: 'required',
      },
      {
        name: 'size',
        description:
          'Specifies the number of visible options in a drop-down list',
        value: 'number',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },

  {
    title: '<small>',
    description:
      '\n It is used to make text font one size smaller than document’s base\n font size.\n ',
    attributes: [
      {
        name: 'none',
        description: null,
        value: null,
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },

  {
    title: '<source>',
    description:
      '\n It defines multiple media resources for different media elements\n such as <picture>, <video>, and <audio> element.\n ',
    attributes: [
      {
        name: 'src',
        description: 'Specifies the URL of the media file',
        value: 'URL',
      },
      {
        name: 'type',
        description: 'Specifies the MIME type of the media file',
        value: 'mime_type',
      },
      {
        name: 'media',
        description:
          'Specifies a hint to the browser of what media query to evaluate the parent <picture> element against.',
        value: 'media_query',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<span>',
    description: '\n It is used for styling and grouping inline.\n ',
    seperator: null,
    html5: false,
    deprecated: false,
    attributes: [
      {
        name: 'class',
        description: 'Specifies one or more class names for an element.',
        value: 'classname',
      },
      {
        name: 'id',
        description: 'Specifies a unique id for an element.',
        value: 'id_name',
      },
      {
        name: 'style',
        description: 'Specifies an inline CSS style for an element.',
        value: 'CSS style declaration',
      },
      {
        name: 'title',
        description: 'Specifies extra information about an element.',
        value: 'text',
      },
    ],
  },
  {
    title: '<strike>',
    description:
      '\n It is used to render strike through the text.\n (Not supported in HTML5)',
    seperator: null,
    html5: false,
    deprecated: true,
    attributes: null,
  },
  {
    title: '<strong>',
    description: 'It is used to define important text.',
    seperator: null,
    html5: false,
    deprecated: false,
    attributes: [
      {
        name: 'class',
        description: 'Specifies one or more class names for an element.',
        value: 'classname',
      },
      {
        name: 'id',
        description: 'Specifies a unique id for an element.',
        value: 'id_name',
      },
      {
        name: 'title',
        description: 'Specifies extra information about an element.',
        value: 'text',
      },
    ],
  },

  {
    title: '<style>',
    description:
      'It is used to contain style information for an HTML document.',
    attributes: [
      {
        name: 'type',
        description: 'Specifies the type of stylesheet language',
        value: 'text/css',
      },
      {
        name: 'media',
        description: 'Specifies the media device for the styled document',
        value: 'media_query',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<sub>',
    description: 'It defines a text which displays as a subscript text.',
    attributes: [
      {
        name: 'none',
        description: null,
        value: null,
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<summary>',
    description: 'It defines summary which can be used with <details> tag.',
    attributes: [
      {
        name: 'none',
        description: null,
        value: null,
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },

  {
    title: '<sup>',
    description: 'It defines a text which represents as superscript text.',
    attributes: [
      {
        name: 'none',
        description: null,
        value: null,
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<svg>',
    description:
      'It is used as a container for SVG (Scalable Vector Graphics).',
    attributes: [
      {
        name: 'xmlns',
        description: 'Defines the XML namespace for the document',
        value: 'URL',
      },
      {
        name: 'width',
        description: 'Defines the width of the SVG viewport',
        value: 'number | percentage',
      },
      {
        name: 'height',
        description: 'Defines the height of the SVG viewport',
        value: 'number | percentage',
      },
      {
        name: 'viewBox',
        description: 'Defines the position and size of the viewport',
        value: 'min-x min-y width height',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<table>',
    description:
      'It is used to present data in tabular form or to create a table within HTML document.',
    attributes: [
      {
        name: 'border',
        description: 'Specifies whether the table cells have borders or not',
        value: '1 | 0',
      },
      {
        name: 'cellpadding',
        description: 'Specifies the padding within each table cell',
        value: 'pixels',
      },
      {
        name: 'cellspacing',
        description: 'Specifies the spacing between adjacent table cells',
        value: 'pixels',
      },
      {
        name: 'width',
        description: 'Specifies the width of the table',
        value: 'pixels | percentage',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },

  {
    title: '<tbody>',
    description:
      'It represents the body content of an HTML table and is used along with <thead> and <tfoot>.',
    attributes: [
      {
        name: 'align',
        description:
          'Specifies the horizontal alignment of the content within the table body',
        value: 'left | center | right',
      },
      {
        name: 'valign',
        description:
          'Specifies the vertical alignment of the content within the table body',
        value: 'top | middle | bottom | baseline',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<td>',
    description:
      'It is used to define cells of an HTML table which contains table data.',
    attributes: [
      {
        name: 'colspan',
        description: 'Specifies the number of columns a cell should span',
        value: 'number',
      },
      {
        name: 'rowspan',
        description: 'Specifies the number of rows a cell should span',
        value: 'number',
      },
      {
        name: 'headers',
        description:
          'Specifies one or more header cells a cell is associated with',
        value: 'id1 id2 ...',
      },
      {
        name: 'align',
        description:
          'Specifies the horizontal alignment of the content within the cell',
        value: 'left | center | right',
      },
      {
        name: 'valign',
        description:
          'Specifies the vertical alignment of the content within the cell',
        value: 'top | middle | bottom | baseline',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<template>',
    description:
      'It is used to contain the client-side content which will not display at the time of page load and may render later using JavaScript.',
    attributes: [
      {
        name: 'content',
        description:
          'Specifies the content that will be used to create the template',
        value: 'text',
      },
      {
        name: 'name',
        description:
          'Specifies a name for the template that can be used to reference it later',
        value: 'text',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },

  {
    title: '<textarea>',
    description:
      'It is used to define multiple line input, such as comment, feedback, and review, etc.',
    attributes: [
      {
        name: 'autocomplete',
        description:
          'Specifies whether the textarea should have autocomplete enabled or not',
        value: 'on/off',
      },
      {
        name: 'autofocus',
        description:
          'Specifies that the textarea should automatically get focus when the page loads',
        value: 'autofocus',
      },
      {
        name: 'cols',
        description:
          'Specifies the visible width of a text area, in average character widths',
        value: 'number',
      },
      {
        name: 'dirname',
        description: 'Specifies the direction of the text in the textarea',
        value: 'ltr/rtl',
      },
      {
        name: 'disabled',
        description: 'Specifies that the textarea should be disabled',
        value: 'disabled',
      },
      {
        name: 'form',
        description: 'Specifies the form the textarea belongs to',
        value: 'form_id',
      },
      {
        name: 'maxlength',
        description:
          'Specifies the maximum number of characters allowed in the textarea',
        value: 'number',
      },
      {
        name: 'name',
        description: 'Specifies a name for the textarea',
        value: 'text',
      },
      {
        name: 'placeholder',
        description:
          'Specifies a short hint that describes the expected value of the textarea',
        value: 'text',
      },
      {
        name: 'readonly',
        description: 'Specifies that the textarea should be read-only',
        value: 'readonly',
      },
      {
        name: 'required',
        description:
          'Specifies that the textarea is required (must be filled out)',
        value: 'required',
      },
      {
        name: 'rows',
        description: 'Specifies the visible number of lines in a text area',
        value: 'number',
      },
      {
        name: 'wrap',
        description:
          'Specifies how the text in a textarea is to be wrapped when submitted in a form',
        value: 'soft/hard',
      },
    ],
    separator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<tfoot>',
    description: 'It defines the footer content of an HTML table.',
    attributes: [
      {
        name: 'align',
        description:
          'Specifies the horizontal alignment of the content in a table footer cell',
        value: 'left/center/right/justify/char',
      },
      {
        name: 'bgcolor',
        description: 'Specifies the background color of a table footer cell',
        value: 'color_name/color_code',
      },
      {
        name: 'char',
        description:
          'Specifies the character to be used for the alignment character in a table footer cell',
        value: 'char',
      },
      {
        name: 'charoff',
        description:
          'Specifies the offset of the alignment character in a table footer cell',
        value: 'number',
      },
      {
        name: 'valign',
        description:
          'Specifies the vertical alignment of the content in a table footer cell',
        value: 'top/middle/bottom/baseline',
      },
    ],
    separator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<th>',
    description:
      '\n            It defines the head cell of an HTML table.\n          ',
    seperator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<thead>',
    description:
      '\n            It defines the header of an HTML table. It is used along with\n            <tbody> and <tfoot> tags.\n          ',
    seperator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<time>',
    description:
      '\n            It is used to define data/time within an HTML document.\n          ',
    seperator: null,
    html5: true,
    deprecated: false,
  },
  {
    title: '<title>',
    description:
      '\n            It defines the title or name of an HTML document.\n          ',
    seperator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<tr>',
    description: 'It defines the row cells in an HTML table',
    seperator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<track>',
    description:
      '\n            It is used to define text tracks for <audio> and\n            <video> elements.\n          ',
    seperator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<tt>',
    description:
      '\n            It is used to define teletype text.\n            (Not supported in HTML5)',
    seperator: null,
    html5: false,
    deprecated: true,
  },

  {
    title: '<u>',
    description:
      '\n            It is used to render enclosed text with an underline.\n          ',
    seperator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<ul>',
    description: 'It defines unordered list of items.',
    seperator: null,
    html5: false,
    deprecated: false,
  },

  {
    title: '<var>',
    description:
      '\n            It defines variable name used in mathematical or programming\n            context.\n          ',
    seperator: null,
    html5: false,
    deprecated: false,
  },
  {
    title: '<video>',
    description:
      '\n            It is used to embed a video content with an HTML document\n          ',
    seperator: null,
    html5: true,
    deprecated: false,
  },

  {
    title: '<wbr>',
    description:
      '\n            It defines a position within text where break line is possible.\n          ',
    seperator: null,
    html5: true,
    deprecated: false,
  },
]

export default data
