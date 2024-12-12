# Just a repo to showcase an issue in PayloadCMS

Reproduce:

- start dev mode `pnpm dev`
- add one value in the admin panel to each collection and make them related
- go to [GraphQLPlayground](http://localhost:3000/api/graphql-playground)
- add following query (use a private window or lock out, to not have a user login active)

query {
  Joins {
    docs {
      title
      noAccess
      join {
        docs {
          name
        }
      }
    }
  }
}
