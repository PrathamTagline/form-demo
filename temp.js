<form id="myForm">
  <input type="text" name="username" value="JohnDoe">
  <input type="email" name="email" value="john@example.com">
  <input type="password" name="password" value="123456">
  <button type="submit">Submit</button>
</form>

<script>
  // Select the form element
  const form = document.getElementById('myForm');

  // Add an event listener for the submit event
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Create a FormData object from the form
    const formData = new FormData(form);

    // Log all form data
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Optionally convert FormData to a JSON object
    const formDataObject = Object.fromEntries(formData.entries());
    console.log('FormData as JSON:', formDataObject);
  });
</script>
