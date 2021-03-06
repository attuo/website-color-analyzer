// Runs on load. Reads and returns the website's html and css 
(() => {
  const allHTML = document.documentElement.innerHTML;
  const allCSS = [...document.styleSheets]
    .map(styleSheet => {
      try {
        return [...styleSheet.cssRules]
          .map(rule => rule.cssText)
          .join('');
      } catch (e) {
        console.log('Access to stylesheet %s is denied.', styleSheet.href);
      }
    })
    .filter(Boolean)
    .join('\n');

  let websiteContent = {
    html: allHTML,
    css: allCSS
  }
  return websiteContent;
})();