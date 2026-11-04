const fs = require('fs');
let lines = fs.readFileSync('.env', 'utf8').split(/\r?\n/);
let newLines = lines.filter(l => !l.includes('AGORA'));
const tail = [
  'NEXT_PUBLIC_AGORA_APP_ID="4528780fab76412cb5b42e6c2f8bce62"',
  'NEXT_PUBLIC_AGORA_CHAT_APP_KEY="729f79e04645497d8c845131fc3b1fe3"',
  'AGORA_CHAT_ORG_NAME="6110031332"',
  'AGORA_CHAT_APP_NAME="1667352"',
  'AGORA_CHAT_BASE_URL="https://a61.chat.agora.io"',
  'AGORA_APP_TOKEN="007eJxTYDhxVUeFz51Vl5lh52KvgsSInXY5ZcqLH7cUSFxt2fXI/oUCg4mpkYW5hUFaYpK5mYmhUXKSaZKJUapZslGaRVJyqplRdtW5zIZARoYvs2tYGRlYGRgZmBhAfAYGAPjUHMs="',
  'AGORA_CHAT_CLIENT_ID="68d3a111a46446ebaef1384c8041bed9"',
  'AGORA_CHAT_CLIENT_SECRET="52450d1dbf5448c6ad3bd4ee2e13a33c"',
  'AGORA_APP_CERTIFICATE="20cffcf5cbb84579a01e04d31c4d3c30"'
];
fs.writeFileSync('.env', newLines.concat(tail).join('\n'));
