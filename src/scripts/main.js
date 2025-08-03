document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            link: 'https://link-to-project-one.com'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            link: 'https://link-to-project-two.com'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            link: 'https://link-to-project-three.com'
        }
    ];

    const projectsContainer = document.getElementById('projects');

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        const titleElement = document.createElement('h3');
        titleElement.textContent = project.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = project.description;

        const linkElement = document.createElement('a');
        linkElement.href = project.link;
        linkElement.textContent = 'View Project';
        linkElement.target = '_blank';

        projectElement.appendChild(titleElement);
        projectElement.appendChild(descriptionElement);
        projectElement.appendChild(linkElement);
        projectsContainer.appendChild(projectElement);
    });
});