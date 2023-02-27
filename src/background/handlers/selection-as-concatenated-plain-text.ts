import { plainText } from './utils.js'
import { createTabClient } from '@delight-rpc/webextension'
import { IFrameAPI } from '@src/contract.js'
import { CommandHandler } from './types.js'
import { concatPlainText } from '@utils/concat-plain-text.js'

export const commandSelectionAsConcatenatedPlainText: CommandHandler = async (info, tab) => {
  if (tab.id) {
    const tabClient = createTabClient<IFrameAPI>({
      tabId: tab.id
    , frameId: info.frameId
    })
    const text = await tabClient.getSelectionText()

    return plainText(concatPlainText(text))
  }
}
