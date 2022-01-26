import { unified } from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify' //'remark-html'

export const markdownHtml = async (s: string) => {
  const result = await unified()
    .use(markdown)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(html, { allowDangerousHtml: true })
    .process(s)
  return result.toString()
}

export default markdownHtml
