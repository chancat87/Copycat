import { plainText } from './utils.js'
import { createAsciiDocLink } from '@utils/create-ascii-doc-link.js'
import { CommandHandler } from './types.js'
import { formatURL } from '@utils/format-url.js'
import { getConfig } from '@background/storage.js'

export const commandTabLinkAsAsciiDoc: CommandHandler = async (info, tab) => {
  if (tab.url) {
    const config = await getConfig()
    const url = formatURL(tab.url, tab.url, config.url)

    return plainText(createAsciiDocLink(url, tab.title))
  }
}
