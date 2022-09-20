const URL = 'https://6327494d5731f3db9956d362.mockapi.io/users';

$("#form").on("submit", (e) => {
    e.preventDefault();
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let emailAddress = $("#emailAddress").val();
    console.log(firstName, lastName, emailAddress);

    //correct AJAX format
    //select the type of call
    //add the URL
    //JSON.stringify and THEN, specify the data being sent to the API
    $.ajax({
      type: "POST",
      url: URL,
      data: JSON.stringify({
        FirstName: firstName,
        LastName: lastName,
        EmailAddress: emailAddress
      }),
      dataType: "json",
      contentType: "application/json",
      error: (e) =>{
        console.log(e);a6
      }
    });
    $("#firstName").val('');
    $("#lastName").val('');
    $("#emailAddress").val('');
});
$('#listDataButton').on('click', (event) =>{
  event.preventDefault();
  $.ajax({
    url: URL,
    method: 'GET',
    dataType: 'json',
    success: (result) => {
      $(result).each((i, user) => {
        $("#dataBody").append(
          `
          <tr>
            <td>${user.FirstName}</td>
            <td>${user.LastName}</td>
            <td>${user.EmailAddress}</td>
            <td>${user.id}</td>
          </tr>       
          <button>
            Update Data
          </button>
          <button">
            Delete Data
          </button>
          `
         )
        });
     },
  })
});
$("#deleteDataButton").on('click', (event) =>{
  event.preventDefault();
  let id = $("#deleteInputField").val();
  console.log(id);
  $.ajax({
    type: 'DELETE',
    url: URL + "/" + id,
    success: () => {
      console.log(id + " sucessfully deleted");
    }
  })
});