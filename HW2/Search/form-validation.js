// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })

    var btn = document.getElementsByClassName('btn')[0]
    var engine = document.getElementsByClassName('custom-select')[0]
    var keyword = document.getElementsByClassName('form-control')[0]
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      var engines = [
        'https://www.baidu.com/s?wd=',
        'https://cn.bing.com/search?q=',
        'https://www.google.com/search?q=',
      ]
      if (engine.selectedIndex == 0) alert('Please select a search engine!')
      else window.location = engines[engine.selectedIndex-1]+keyword.value
    })

  }, false)
})()
