export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4442dbcb4c972f5741343d',
                  title: 'Sanity Studio',
                  name: 'Linkbrary-1-studio',
                  apiId: '8b095863-698d-4c29-93dc-c826cfc614f5'
                },
                {
                  buildHookId: '5e4442db125cc411ab8f1c08',
                  title: 'Blog Website',
                  name: 'Linkbrary-1',
                  apiId: 'd66d301e-845d-4d26-b738-5ce861b3d120'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Pedroacgc/Linkbrary-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Linkbrary-1.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
