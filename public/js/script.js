
$(document).ready(function() {
    let jobsClickChecker = 0;
    let educationClickChecker = 0;
    // materialize web dynamics
    $('.parallax').parallax();
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    // loop for the scroll down effect when nav bar is clicked
    // merge arrays so I only loop through one array
    let scrollArray = ["#jobsNav", "#educationNav", "#contactNav", "#skillsNav", "#aboutNav", "#projectsNav"];
    let scrollToArray = ["#collapseJobs", "#collapseEducation", "#contactFooter", "#about", "#about", "#projects"];
    let mergedArray = $.merge(scrollArray, scrollToArray);
    let scrollSpeedArray = [900, 1100, 1300, 700, 700, 1400];
    let fullMergedArray = $.merge(mergedArray, scrollSpeedArray);
    // effectively loop through scrollArray and access higher positions (scrollTo and scrollSpeed arrays) using j+6 and j+12
    for(let j=0; j<6; j++) {
        $(fullMergedArray[j]).click(() => {
            $("html, body").animate({
                scrollTop: $(fullMergedArray[j+6]).trigger("click").offset().top
            }, fullMergedArray[j+12]);
        });
    }


    // perform same process for side nav
    let sideScrollArray = ["#jobsSide", "#educationSide", "#contactSide", "#skillsSide", "#aboutSide", "#projectsSide"];
    let sideScrollToArray = ["#collapseJobs", "#collapseEducation", "#contactFooter", "#about", "#about", "#projectRow"];
    let sideMergedArray = $.merge(sideScrollArray, sideScrollToArray);
    let sideScrollSpeedArray = [900, 1100, 1300, 700, 700, 1400];
    let sideFullMergedArray = $.merge(sideMergedArray, sideScrollSpeedArray);
    for(let j=0; j<6; j++) {
        $(sideFullMergedArray[j]).click(() => {
            $("html, body").animate({
                scrollTop: $(sideFullMergedArray[j+6]).trigger("click").offset().top
            }, sideFullMergedArray[j+12]);
            $('.side-nav').sideNav('hide');
        }); 
    }

    return false;
});