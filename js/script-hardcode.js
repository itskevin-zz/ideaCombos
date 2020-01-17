$(document).ready(function(){
    getIdeas();
});
function getUser() {
    var users = [
        "A construction worker",
        "A high school teacher",
        "A florist",
        "An elderly person",
        "A food Inspector",
        "A landlord",
        "A police Officer",
        "A city dweller without a car",
        "A bus driver",
        "A houseboat resident",
        "An accountant",
        "A chef at a popular local restaurant",
        "A high school principal",
        "A business person",
        "A government minister",
        "A farmer",
        "An ambulance driver",
        "A tourist",
        "A cab driver",
        "A homeless person",
        "A recently rehabilitated criminal",
        "A Canadian Border Services Agency officer",
        "A young female apartment tenant",
        "A vacationing university student",
        "A homeowner",
        "A rental tenant",
        "A parking enforcement officer",
        "A veteran",
        "An Uber driver",
        "A bike courier",
        "A minor",
        "A building inspector",
        "A journalist",
        "A city planner",
        "A daycare worker",
        "A diabetic",
        "A newly arrived immigrant",
        "The mayor",
        "A librarian",
        "An undocumented worker",
        "A politician",
        "An unpaid intern",
        "A family lviing below the poverty line",
        "A stay-at-home parent",
        "A cyclist",
        "A pharmacist",
        "A drug addict",
        "a garbage truck drive",
        "A differently abled person",
        "A temp worker",
        "A community outreach volunteer",
        "A lifelong city resident",
        "A busker",
        "A small business owner",
        "A museum guide",
        "A nurse",
        "A retired physician",
        "An immigration lawyer",
        "A guidance counsellor",
        "An assisted-living resident",
        "A spiritual leader",
        "A kindergarten teacher",
        "A retiree",
        "An unemployed person",
        "A postal worker",
        "A mental health professional",
        "A non-native English speaker",
        "A gardener",
        "A soldier",
        "A whistleblower",
        "A medical professional",
        "A drunk"
    ]
    var randomUser = Math.floor(Math.random()*users.length);
    document.getElementById("random-user").innerHTML = users[randomUser];
}
function getTechnology() {
    var technologies = [
        "<h5 class='card-title'>5G</h5><p>5G is the term used to describe the next generation of mobile networks beyond the 4G LTE mobile networks of today.</p>",
        "<h5 class='card-title'>Affective Computing</h5><p>Sometimes called artificial emotional intelligence or emotion AI, Affective Computing is the study and development of systems and devices that can recognize, interpret, process, and simulate human affects. It is an interdisciplinary field spanning computer science, psychology, and cognitive science.</p>",
        "<h5 class='card-title'>Artificial Intelligence (AI)</h5><p>Artificial Intelligence is the theory and development of computer systems able to perform tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.</p>",
        "<h5 class='card-title'>Augmented Reality (AR)</h5><p>Augmented Reality is a technology that superimposes a computer-generated image on a user’s view of the real world, thus providing a composite view.</p>"
    ]
    var randomTechnology = Math.floor(Math.random()*technologies.length);
    document.getElementById("random-technology").innerHTML = technologies[randomTechnology];
}
function getScenario() {
    var scenarios = [
        "A lecture series is taking place at the city public library.",
        "After a particularly cold winter, potholes in the city are rampant.",
        "A local bar’s liquor licence is suspended due to underage serving.",
        "Prolonged drought causes severe water shortages.",
        "A strain of mad cow disease surfaces on a nearby farm.",
        "A lakefront redevelopment encroaches on an existing wildlife habitat."
    ]
    var randomScenario = Math.floor(Math.random()*scenarios.length);
    document.getElementById("random-scenario").innerHTML = scenarios[randomScenario];
}

function getIdeas(){
    getUser();
    getTechnology();
    getScenario();
}