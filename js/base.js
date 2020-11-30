
const $ = function(selector) {
  if (this.querySelectorAll(selector).length > 1) return this.querySelectorAll(selector)  
  return this.querySelector(selector)
}.bind(document)