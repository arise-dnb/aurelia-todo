export class post {
  public slug: string

  activate(params) {
    this.slug = params.slug
  }
}
