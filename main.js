const forms = document.querySelectorAll('[data-form]')

function handleFormSubmit(event) {
  event.preventDefault()
  const form = event.target
  const formData = new FormData(form)
  const email = formData.get('email')

  if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    form.classList.add('validation-error')
    return
  }

  form.classList.remove('validation-error')
}

forms.forEach(form => {
  form.addEventListener('submit', handleFormSubmit)
})
