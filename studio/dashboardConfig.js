export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f2eb3787ce85ce0fd963129',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-c5zq66om',
                  apiId: 'bb6248f9-7753-485f-920d-ccddc33b18e7'
                },
                {
                  buildHookId: '5f2eb378bf54e9b2747198f7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-55jzaum8',
                  apiId: '159f09fb-0869-4648-9333-15ab9b36a05e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cretinaverti/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-55jzaum8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
