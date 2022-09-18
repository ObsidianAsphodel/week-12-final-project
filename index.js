const URL = 'https://6327494d5731f3db9956d362.mockapi.io/users';

$('#submitButton').on('click', () => {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let emailAddress = $('#emailAddress').val();
    console.log(firstName,lastName,emailAddress);
    
    $.ajax({
    method: 'POST',
    url: URL,
    dataType: 'json',
    contentType: 'applcation/json',
    data: JSON.stringify(firstName,lastName,emailAddress),
    }).done(() => {
       console.log('finished'); 
    });
});