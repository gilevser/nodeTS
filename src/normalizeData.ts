  type TNormalizeData = {
    byId: {[key: string] : TPost}[],
    allIds: string[]
  }

  type TPost = {
    id: string,
    title: string,
    body: string
  }

  export const normalizeData = (posts:TPost[] ):TNormalizeData => {

    return {
        byId: posts.map(post => ({ [`${post.id}`] : {...post}})) ,
        allIds: posts.map(post => post.id)

    }
  }