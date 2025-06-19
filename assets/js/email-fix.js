document.addEventListener('DOMContentLoaded', function() {
  const emailLink = document.querySelector('a[href^="mailto:"]');
  if (emailLink) {
    emailLink.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = this.href;
    });
  }
});
