<!-- Please remove this file from your project -->
<template>
  <table class="w-full text-sm text-left text-gray-100 dark:text-gray-400">
    <thead
      class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    >
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="col" class="px-6 py-3">Pattern</th>
        <th scope="col" class="px-6 py-3">Meaning</th>
        <th scope="col" class="px-6 py-3">Described in section</th>
        <th scope="col" class="px-6 py-3">First defined in level</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">*</th>
        <td class="px-6 py-4">any element</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#universal-selector"
            >Universal selector</a
          >
        </td>
        <td class="px-6 py-4">2</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E</th>
        <td class="px-6 py-4">an element of type E</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#type-selectors"
            >Type selector</a
          >
        </td>
        <td class="px-6 py-4">1</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E[foo]</th>
        <td class="px-6 py-4">an E element with a "foo" attribute</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#attribute-selectors"
            >Attribute selectors</a
          >
        </td>
        <td class="px-6 py-4">2</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E[foo="bar"]</th>
        <td class="px-6 py-4">
          an E element whose "foo" attribute value is exactly equal to "bar"
        </td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#attribute-selectors"
            >Attribute selectors</a
          >
        </td>
        <td class="px-6 py-4">2</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E[foo~="bar"]</th>
        <td class="px-6 py-4">
          an E element whose "foo" attribute value is a list of
          whitespace-separated values, one of which is exactly equal to "bar"
        </td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#attribute-selectors"
            >Attribute selectors</a
          >
        </td>
        <td class="px-6 py-4">2</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E[foo^="bar"]</th>
        <td class="px-6 py-4">
          an E element whose "foo" attribute value begins exactly with the
          string "bar"
        </td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#attribute-selectors"
            >Attribute selectors</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E[foo$="bar"]</th>
        <td class="px-6 py-4">
          an E element whose "foo" attribute value ends exactly with the string
          "bar"
        </td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#attribute-selectors"
            >Attribute selectors</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E[foo*="bar"]</th>
        <td class="px-6 py-4">
          an E element whose "foo" attribute value contains the substring "bar"
        </td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#attribute-selectors"
            >Attribute selectors</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E[foo|="en"]</th>
        <td class="px-6 py-4">
          an E element whose "foo" attribute has a hyphen-separated list of
          values beginning (from the left) with "en"
        </td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#attribute-selectors"
            >Attribute selectors</a
          >
        </td>
        <td class="px-6 py-4">2</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E:root</th>
        <td class="px-6 py-4">an E element, root of the document</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos"
            >Structural pseudo-classes</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E:nth-child(n)</th>
        <td class="px-6 py-4">an E element, the n-th child of its parent</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos"
            >Structural pseudo-classes</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E:nth-last-child(n)</th>
        <td class="px-6 py-4">
          an E element, the n-th child of its parent, counting from the last one
        </td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos"
            >Structural pseudo-classes</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E:nth-of-type(n)</th>
        <td class="px-6 py-4">an E element, the n-th sibling of its type</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos"
            >Structural pseudo-classes</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E:nth-last-of-type(n)</th>
        <td class="px-6 py-4">
          an E element, the n-th sibling of its type, counting from the last one
        </td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos"
            >Structural pseudo-classes</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E:first-child</th>
        <td class="px-6 py-4">an E element, first child of its parent</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos"
            >Structural pseudo-classes</a
          >
        </td>
        <td class="px-6 py-4">2</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E:last-child</th>
        <td class="px-6 py-4">an E element, last child of its parent</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos"
            >Structural pseudo-classes</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E:first-of-type</th>
        <td class="px-6 py-4">an E element, first sibling of its type</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos"
            >Structural pseudo-classes</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E:last-of-type</th>
        <td class="px-6 py-4">an E element, last sibling of its type</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos"
            >Structural pseudo-classes</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E:only-child</th>
        <td class="px-6 py-4">an E element, only child of its parent</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos"
            >Structural pseudo-classes</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E:only-of-type</th>
        <td class="px-6 py-4">an E element, only sibling of its type</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos"
            >Structural pseudo-classes</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E:empty</th>
        <td class="px-6 py-4">
          an E element that has no children (including text nodes)
        </td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos"
            >Structural pseudo-classes</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">
          E:link<br />
          E:visited
        </th>
        <td class="px-6 py-4">
          an E element being the source anchor of a hyperlink of which the
          target is not yet visited (:link) or already visited (:visited)
        </td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#link"
            >The link pseudo-classes</a
          >
        </td>
        <td class="px-6 py-4">1</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">
          E:active<br />
          E:hover<br />
          E:focus
        </th>
        <td class="px-6 py-4">an E element during certain user actions</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#useraction-pseudos"
            >The user action pseudo-classes</a
          >
        </td>
        <td class="px-6 py-4">1 and 2</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E:target</th>
        <td class="px-6 py-4">
          an E element being the target of the referring URI
        </td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#target-pseudo"
            >The target pseudo-class</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E:lang(fr)</th>
        <td class="px-6 py-4">
          an element of type E in language "fr" (the document language specifies
          how language is determined)
        </td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#lang-pseudo"
            >The :lang() pseudo-class</a
          >
        </td>
        <td class="px-6 py-4">2</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">
          E:enabled<br />
          E:disabled
        </th>
        <td class="px-6 py-4">
          a user interface element E which is enabled or disabled
        </td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#UIstates"
            >The UI element states pseudo-classes</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">
          E:checked<!--<br>E:indeterminate-->
        </th>
        <td class="px-6 py-4">
          a user interface element E which is checked<!-- or in an
      indeterminate state-->
          (for instance a radio-button or checkbox)
        </td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#UIstates"
            >The UI element states pseudo-classes</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E::first-line</th>
        <td class="px-6 py-4">the first formatted line of an E element</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#first-line"
            >The ::first-line pseudo-element</a
          >
        </td>
        <td class="px-6 py-4">1</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E::first-letter</th>
        <td class="px-6 py-4">the first formatted letter of an E element</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#first-letter"
            >The ::first-letter pseudo-element</a
          >
        </td>
        <td class="px-6 py-4">1</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E::before</th>
        <td class="px-6 py-4">generated content before an E element</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#gen-content"
            >The ::before pseudo-element</a
          >
        </td>
        <td class="px-6 py-4">2</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E::after</th>
        <td class="px-6 py-4">generated content after an E element</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#gen-content"
            >The ::after pseudo-element</a
          >
        </td>
        <td class="px-6 py-4">2</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E.warning</th>
        <td class="px-6 py-4">
          an E element whose class is "warning" (the document language specifies
          how class is determined).
        </td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#class-html"
            >Class selectors</a
          >
        </td>
        <td class="px-6 py-4">1</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E#myid</th>
        <td class="px-6 py-4">an E element with ID equal to "myid".</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#id-selectors"
            >ID selectors</a
          >
        </td>
        <td class="px-6 py-4">1</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E:not(s)</th>
        <td class="px-6 py-4">
          an E element that does not match simple selector s
        </td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#negation"
            >Negation pseudo-class</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E F</th>
        <td class="px-6 py-4">an F element descendant of an E element</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#descendant-combinators"
            >Descendant combinator</a
          >
        </td>
        <td class="px-6 py-4">1</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E &gt; F</th>
        <td class="px-6 py-4">an F element child of an E element</td>
        <td class="px-6 py-4">
          <a href="http://www.w3.org/TR/css3-selectors/#child-combinators"
            >Child combinator</a
          >
        </td>
        <td class="px-6 py-4">2</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E + F</th>
        <td class="px-6 py-4">
          an F element immediately preceded by an E element
        </td>
        <td class="px-6 py-4">
          <a
            href="http://www.w3.org/TR/css3-selectors/#adjacent-sibling-combinators"
            >Adjacent sibling combinator</a
          >
        </td>
        <td class="px-6 py-4">2</td>
      </tr>
      <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-3">E ~ F</th>
        <td class="px-6 py-4">an F element preceded by an E element</td>
        <td class="px-6 py-4">
          <a
            href="http://www.w3.org/TR/css3-selectors/#general-sibling-combinators"
            >General sibling combinator</a
          >
        </td>
        <td class="px-6 py-4">3</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'CSSSelector',
}
</script>
