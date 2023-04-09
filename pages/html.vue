<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:flex items-center sm:pt-0"
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8 my-8">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Tag name</th>
            <th scope="col" class="px-6 py-3">Description</th>
          </tr>
        </thead>

        <tbody ref="body">
          <HTMLItem v-for="item in data" :key="item.title" :item="item" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      data: [
        {
          title: '<!-- -->',
          description:
            '\n            This tag is used to apply comment in an HTML document.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<!DOCTYPE>',
          description:
            '\n            This tag is used to specify the version of HTML\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: null,
          description: null,
          seperator: 'A',
          html5: false,
        },
        {
          title: '<a>',
          description:
            '\n            It is termed as anchor tag and it creates a hyperlink or link.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<abbr>',
          description:
            '\n            It defines an abbreviation for a phrase or longer word.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<acronym>',
          description:
            '\n            It defines acronym for a word.\n            (Not supported in HTML5)',
          seperator: null,
          html5: false,
          deprecated: true,
        },
        {
          title: '<address>',
          description:
            "\n            It defines the author's contact information of the HTML article\n          ",
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<applet>',
          description:
            '\n            It defines an embedded Java applet.\n            (Not supported in HTML5)',
          seperator: null,
          html5: false,
          deprecated: true,
        },
        {
          title: '<area>',
          description: 'It defines the area of an image map.',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<article>',
          description: 'It defines the self-contained content.',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<aside>',
          description:
            '\n            It defines content aside from main content. Mainly represented as\n            sidebar.\n          ',
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
          title: '<basefont>',
          description:
            '\n            This tag is used to set default font, size and color for all\n            elements of document. (Not supported in HTML5)',
          seperator: null,
          html5: false,
          deprecated: true,
        },
        {
          title: '<bdi>',
          description:
            '\n            This tag is used to provide isolation for that part of text which\n            may be formatted in different directions from its surrounding\n            text.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<bdo>',
          description:
            '\n            It is used to override the current text direction.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<big>',
          description:
            '\n            This tag is used to make font size one level larger than its\n            surrounding content. (Not supported in HTML5)',
          seperator: null,
          html5: false,
          deprecated: true,
        },
        {
          title: '<blockquote>',
          description:
            '\n            It is used to define a content which is taken from another source.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<body>',
          description:
            '\n            It is used to define the body section of an HTML document.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<br>',
          description: 'It is used to apply single line break.',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<button>',
          description:
            '\n            It is used to represent a clickable button\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: null,
          description: null,
          seperator: 'C',
          html5: false,
        },
        {
          title: '<canvas>',
          description:
            '\n            It is used to provide a graphics space within a web document.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<caption>',
          description:
            '\n            It is used to define a caption for a table.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<center>',
          description:
            '\n            It is used to align the content in center.\n            (Not supported in HTML5)',
          seperator: null,
          html5: false,
          deprecated: true,
        },
        {
          title: '<cite>',
          description:
            '\n            It is used to define the title of the work, book, website, etc.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<code>',
          description:
            '\n            It is used to display a part of programming code in an HTML\n            document.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<col>',
          description:
            '\n            It defines a column within a table which represent common\n            properties of columns and used with the <colgroup> element.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<colgroup>',
          description:
            '\n            It is used to define group of columns in a table.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: null,
          description: null,
          seperator: 'D',
          html5: false,
        },
        {
          title: '<data>',
          description:
            '\n            It is used to link the content with the machine-readable\n            translation.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<datalist>',
          description:
            '\n            It is used to provide a predefined list for input option.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<dd>',
          description:
            '\n            It is used to provide definition/description of a term in\n            description list.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<del>',
          description:
            '\n            It defines a text which has been deleted from the document.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<details>',
          description:
            '\n            It defines additional details which user can either view or hide.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<dfn>',
          description:
            '\n            It is used to indicate a term which is defined within a\n            sentence/phrase.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<dialog>',
          description:
            '\n            It defines a dialog box or other interactive components.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<dir>',
          description:
            '\n            It is used as container for directory list of files.\n            (Not supported in HTML5)',
          seperator: null,
          html5: false,
          deprecated: true,
        },
        {
          title: '<div>',
          description:
            '\n            It defines a division or section within HTML document.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<dl>',
          description: 'It is sued to define a description list.',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<dt>',
          description:
            '\n            It is used to define a term in description list.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: null,
          description: null,
          seperator: 'E',
          html5: false,
        },
        {
          title: '<em>',
          description:
            '\n            It is used to emphasis the content applied within this element.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<embed>',
          description:
            '\n            It is used as embedded container for external\n            file/application/media, etc.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: null,
          description: null,
          seperator: 'F',
          html5: false,
        },
        {
          title: '<fieldset>',
          description:
            '\n            It is used to group related elements/labels within a web form.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<figcaption>',
          description:
            '\n            It is used to add a caption or explanation for the <figure>\n            element.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<figure>',
          description:
            '\n            It is used to define the self-contained content, and s mostly\n            refer as single unit.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<font>',
          description:
            '\n            It defines the font, size, color, and face for the content.\n            (Not supported in HTML5)',
          seperator: null,
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
          title: '<form>',
          description: 'It is used to define an HTML form.',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<frame>',
          description:
            '\n            It defines a particular area of webpage which can contain another\n            HTML file. (Not supported in HTML5)',
          seperator: null,
          html5: false,
          deprecated: true,
        },
        {
          title: '<frameset>',
          description:
            '\n            It defines group of Frames.\n            (Not supported in HTML5)',
          seperator: null,
          html5: false,
          deprecated: true,
        },
        {
          title: null,
          description: null,
          seperator: 'H',
          html5: false,
        },
        {
          title: '<h1> to <h6>',
          description:
            '\n            It defines headings for an HTML document from level 1 to level 6.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<head>',
          description:
            '\n            It defines the head section of an HTML document.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<header>',
          description:
            '\n            It defines the header of a section or webpage.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<hr>',
          description:
            '\n            It is used to apply thematic break between paragraph-level\n            elements.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<html>',
          description: 'It represents root of an HTML document.',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: null,
          description: null,
          seperator: 'I',
          html5: false,
        },
        {
          title: '<i>',
          description:
            '\n            It is used to represent a text in some different voice.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<iframe>',
          description:
            '\n            It defines an inline frame which can embed other content.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<img>',
          description:
            '\n            It is used to insert an image within an HTML document.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<input>',
          description:
            '\n            It defines an input field within an HTML form.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<ins>',
          description:
            '\n            It represent text that has been inserted within an HTML document.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<isindex>',
          description:
            '\n            It is used to display search string for current document.\n            (Not supported in HTML5)',
          seperator: null,
          html5: false,
          deprecated: true,
        },
        {
          title: null,
          description: null,
          seperator: 'K',
          html5: false,
        },
        {
          title: '<kbd>',
          description: 'It is used to define keyboard input.',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: null,
          description: null,
          seperator: 'L',
          html5: false,
        },
        {
          title: '<label>',
          description:
            '\n            It defines a text label for the input field of form.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<legend>',
          description:
            '\n            It defines a caption for content of <fieldset>\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<li>',
          description: 'It is used to represent items in list.',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<link>',
          description:
            '\n            It represents a relationship between current document and an\n            external resource.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: null,
          description: null,
          seperator: 'M',
          html5: false,
        },
        {
          title: '<main>',
          description:
            '\n            It represents the main content of an HTML document.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<map>',
          description:
            '\n            It defines an image map with active areas.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<mark>',
          description: 'It represents a highlighted text.',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<marquee>',
          description:
            '\n            It is used to insert the scrolling text or an image either\n            horizontally or vertically.\n            (Not supported in HTML5)',
          seperator: null,
          html5: false,
          deprecated: true,
        },
        {
          title: '<menu>',
          description:
            '\n            It is used for creating a menu list of commands.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<meta>',
          description: 'It defines metadata of an HTML document.',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<meter>',
          description:
            '\n            It defines scalar measurement with known range or fractional\n            value.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: null,
          description: null,
          seperator: 'N',
          html5: false,
        },
        {
          title: '<nav>',
          description:
            '\n            It represents section of page to represent navigation links.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<noframes>',
          description:
            '\n            It provides alternate content to represent in browser which does\n            not support the <frame> elements.\n            (Not supported in HTML5)',
          seperator: null,
          html5: false,
          deprecated: true,
        },
        {
          title: '<noscript>',
          description:
            '\n            It provides an alternative content if a script type is not\n            supported in browser.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: null,
          description: null,
          seperator: 'O',
          html5: false,
        },
        {
          title: '<object>',
          description:
            '\n            It is used to embed an object in HTML file.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<ol>',
          description: 'It defines an ordered list of items.',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<optgroup>',
          description:
            '\n            It is used to group the options of a drop-down list.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<option>',
          description:
            '\n            It is used to define options or items in a drop-down list.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<output>',
          description:
            '\n            It is used as container element which can show result of a\n            calculation.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: null,
          description: null,
          seperator: 'P',
          html5: false,
        },
        {
          title: '<p>',
          description:
            '\n            It represents a paragraph in an HTML document.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<param>',
          description:
            '\n            It defines parameter for an <object> element\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<picture>',
          description:
            '\n            It defines more than one source element and one image element.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<pre>',
          description:
            '\n            It defines preformatted text in an HTML document.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<progress>',
          description:
            '\n            It defines the progress of a task within HTML document.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: null,
          description: null,
          seperator: 'Q',
          html5: false,
        },
        {
          title: '<q>',
          description: 'It defines short inline quotation.',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: null,
          description: null,
          seperator: 'R',
          html5: false,
        },
        {
          title: '<rp>',
          description:
            '\n            It defines an alternative content if browser does not supports\n            ruby annotations.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<rt>',
          description:
            '\n            It defines explanations and pronunciations in ruby annotations.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<ruby>',
          description: 'It is used to represent ruby annotations.',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: null,
          description: null,
          seperator: 'S',
          html5: false,
        },
        {
          title: '<s>',
          description:
            '\n            It render text which is no longer correct or relevant.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<samp>',
          description:
            '\n            It is used to represent sample output of a computer program.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<script>',
          description:
            '\n            It is used to declare the JavaScript within HTML document.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<section>',
          description:
            '\n            It defines a generic section for a document.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<select>',
          description:
            '\n            It represents a control which provides a menu of options.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<small>',
          description:
            '\n            It is used to make text font one size smaller than document?s base\n            font size.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<source>>',
          description:
            '\n            It defines multiple media recourses for different media element\n            such as <picture>, <video>, and <audio> element.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<span>',
          description:
            '\n            It is used for styling and grouping inline.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<strike>',
          description:
            '\n            It is used to render strike through the text.\n            (Not supported in HTML5)',
          seperator: null,
          html5: false,
          deprecated: true,
        },
        {
          title: '<strong>',
          description: 'It is used to define important text.',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<style>',
          description:
            '\n            It is used to contain style information for an HTML document.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<sub>',
          description:
            '\n            It defines a text which displays as a subscript text.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<summary>',
          description:
            '\n            It defines summary which can be used with <details> tag.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
        {
          title: '<sup>',
          description:
            '\n            It defines a text which represent as superscript text.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<svg>',
          description:
            '\n            It is used as container of SVG (Scalable Vector Graphics).\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: null,
          description: null,
          seperator: 'T',
          html5: false,
        },
        {
          title: '<table>',
          description:
            '\n            It is used to present data in tabular form or to create a table\n            within HTML document.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<tbody>',
          description:
            '\n            It represents the body content of an HTML table and used along\n            with <thead> and <tfoot>.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<td>',
          description:
            '\n            It is used to define cells of an HTML table which contains table\n            data\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<template>',
          description:
            '\n            It is used to contain the client side content which will not\n            display at time of page load and may render later using\n            JavaScript.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<textarea>',
          description:
            '\n            It is used to define multiple line input, such as comment,\n            feedback, and review, etc.\n          ',
          seperator: null,
          html5: false,
          deprecated: false,
        },
        {
          title: '<tfoot>',
          description:
            '\n            It defines the footer content of an HTML table.\n          ',
          seperator: null,
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
          title: null,
          description: null,
          seperator: 'U',
          html5: false,
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
          title: null,
          description: null,
          seperator: 'V',
          html5: false,
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
          title: null,
          description: null,
          seperator: 'W',
          html5: false,
        },
        {
          title: '<wbr>',
          description:
            '\n            It defines a position within text where break line is possible.\n          ',
          seperator: null,
          html5: true,
          deprecated: false,
        },
      ],
    }
  },
})
</script>
