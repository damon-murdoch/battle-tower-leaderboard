// Set the page title/subtitle
document.getElementById('sitetitle').innerHTML = config.title;
document.getElementById('sitesubtitle').innerHTML = config.subtitle;

// Assign the header to the title
document.title = config.title;

// Get the page's query string
const query = window.location.search;

// Retrieve the params from the string
const params = new URLSearchParams(query);

// 
function getOptionSelected(elem_id)
{
  // Get the selected element from the form
  let element = document.getElementById(elem_id);

  return element[element.selectedIndex].id;
}

// Generation drop down updater
function getGenerationDropdown()
{
  // Get the generation drop-down document element
  let gen_dd = document.getElementById('gen_dd');

  // Empty the inner html
  gen_dd.innerHTML = "";

  // Loop over the generations
  for (let gen in LEADERBOARD)
  {
    // Get the object from the document
    let generation = LEADERBOARD[gen];

    // Create a new option element
    let option = document.createElement('option');

    // Set name, id for option
    option.id = gen;
    option.name = gen;

    // Set the text for the drop-down
    option.innerHTML = generation.name;

    // Append the option to the drop-down
    gen_dd.appendChild(option);
  }

  // Set the on-change attribute for the option
  gen_dd.addEventListener('change', function(){
    // Run the game drop down updater for the new generation
    getGameDropdown();
  });

  // Run the game drop down updater for the new generation
  getGameDropdown();
}

// Game drop down updater
function getGameDropdown()
{
  // Get the selected generation
  let gen = getOptionSelected('gen_dd')

  // Get the generation drop-down document element
  let gme_dd = document.getElementById('gme_dd');

  // Empty the inner html
  gme_dd.innerHTML = "";

  // Loop over the games
  // Loop over the generations
  for (let gme in LEADERBOARD[gen].games)
  {
    // Get the object from the document
    let game = LEADERBOARD[gen].games[gme];

    // Create a new option element
    let option = document.createElement('option');

    // Set name, id for option
    option.id = gme;
    option.name = gme;

    // Set the text for the drop-down
    option.innerHTML = game.name;

    // Append the option to the drop-down
    gme_dd.appendChild(option);
  }

  // Set the on-change attribute for the option
  gme_dd.addEventListener('change', function(){
    // Run the format drop-down updater for the new game
    getFormatDropdown();
  });

  // Run the format drop down updater for the new game
  getFormatDropdown();
}

// Format drop down updater
function getFormatDropdown()
{
  // Get the selected generation
  let gen = getOptionSelected('gen_dd')

  // Get the selected game
  let gme = getOptionSelected('gme_dd')

  // Get the generation drop-down document element
  let fmt_dd = document.getElementById('fmt_dd');

  // Empty the inner html
  fmt_dd.innerHTML = "";

  // Loop over the games
  // Loop over the generations
  for (let fmt in LEADERBOARD[gen].games[gme].formats)
  {
    // Get the object from the document
    let format = LEADERBOARD[gen].games[gme].formats[fmt];

    // Create a new option element
    let option = document.createElement('option');

    // Set name, id for option
    option.id = fmt;
    option.name = fmt;

    // Set the text for the drop-down
    option.innerHTML = fmt;

    // Append the option to the drop-down
    fmt_dd.appendChild(option);
  }

  // Set the on-change attribute for the option
  fmt_dd.addEventListener('change', function(){
    // Run the format table updater
    drawTable();
  });

  // Draw the table
  drawTable();
}

// Render the High Score table to the screen
function drawTable()
{
  // Get the selected generation
  let gen = getOptionSelected('gen_dd')

  // Get the selected game
  let gme = getOptionSelected('gme_dd')

  // Get the selected format
  let fmt = getOptionSelected('fmt_dd');

  // Get the table
  let tbody = document.getElementById('tbody');

  // Clear the contents in the table
  tbody.innerHTML = "";

  // Record the placing on the table
  let i = 0;

  // Loop over all of the lines in the format / game / generation
  for (let line of LEADERBOARD[gen].games[gme].formats[fmt])
  {
    // Create table row element
    let tr = document.createElement('tr');

    // Add the record ranking to the table
    tr.innerHTML += "<td>" + ++i + "</td>";

    // Add the record wins to the table
    tr.innerHTML += "<td>" + line[2] + "</td>";

    // Add the record name to the table
    tr.innerHTML += "<td><a href=" + line[1] + ">" + line[0] + "</a></td>";

    // Add the record status to the table
    tr.innerHTML += "<td>" + line[3] + "</td>";

    // Add the record team to the table
    tr.innerHTML += "<td><a href=" + line[4] + "> Link </td>";
    
    // Add the record proof to the table
    tr.innerHTML += "<td><a href=" + line[5] + "> Link </td>";

    // Add the row to the table
    tbody.appendChild(tr);
  }
}

// Code after this point runs when the page loads

// Initialise the drop-downs
getGenerationDropdown();