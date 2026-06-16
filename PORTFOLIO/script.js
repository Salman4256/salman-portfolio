const projects = document.querySelectorAll('.project');

projects.forEach((project, index) => {

    project.style.opacity = "0";

    setTimeout(() => {

        project.style.transition = "0.8s";
        project.style.opacity = "1";

    }, index * 300);

});