const voteErrorMessages = {
  ALREADY_VOTED: '很抱歉，您所填寫的手機已經完成投票，每個手機號碼僅限投票一次。',
  MAX_ATTEMPT: '很抱歉，您的簡訊驗證碼嘗試次數已經達到上限，無法再使用此手機號碼進行後續投票。',
  MAX_REQUEST: '很抱歉，您的簡訊驗證碼請求次數已經達到上限，請耐心等候接收上次請求的驗證碼。',
  SMS_SEND_FAILED: '很抱歉，伺服器在發送簡訊驗證碼時發生錯誤，請聯絡 RSL 賽事聯盟官方進行處理。',
  REQUEST_LIMIT: '修但幾勒，請求驗證碼速度過快，請稍等 5 分鐘後再重試。'
}

export default voteErrorMessages
