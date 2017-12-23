$(document).ready(function() {
  var username = $('#username');
  var password = $('#password');
  var confirmPassword = $('#confirm_password');
  var submit = $('#submit');

  $(username).keyup(function() {
    if ($(username).val().length > 3) {
      $('.span-user').hide();
    } else {
      $('.span-user').show();
    }
  });

  $(password).keyup(function() {
    if ($(password).val().length > 6) {
      $('.span-usertwo').hide();
    } else {
      $('.span-usertwo').show();
    }

    if ($(confirmPassword).val() !== '') {
      if ($(confirmPassword).val() === $(password).val()) {
        $('.span-userthree').hide();
      } else {
        $('.span-userthree').show();
      }
    }
  });

  $(confirmPassword).keyup(function() {
    if ($(confirmPassword).val() === $(password).val()) {
      $('.span-userthree').hide();
    } else {
      $('.span-userthree').show();
    }

    if ($(username).val().length > 3 && $(password).val().length > 6 && $(confirmPassword).val() === $(password).val()) {
      $(submit).attr('disabled', false);
    }
  });
});