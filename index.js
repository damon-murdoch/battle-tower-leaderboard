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
    getGameDropdown(getOptionSelected('gen_dd'));
  });

  // Run the game drop down updater for the new generation
  getGameDropdown(getOptionSelected('gen_dd'));
}

// Game drop down updater
function getGameDropdown(gen)
{
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
    getFormatDropdown(getOptionSelected('gen_dd'), getOptionSelected('gme_dd'));
  });

  // Run the format drop down updater for the new game
  getFormatDropdown(getOptionSelected('gen_dd'), getOptionSelected('gme_dd'));
}

// Format drop down updater
function getFormatDropdown(gen, gme)
{
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
}

getGenerationDropdown();