const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedPinCode = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle("**▬▬▬▬▬▬[** ©️ **» LMU Bot** ©️ **]▬▬▬▬▬▬**")
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1"
    ).setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/9DsHsK6Y9t)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=812789624695029781&scope=bot&permissions=805314622)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**

• Bot ile ilgili tavsiyelerinizi veya bulduğunuz hataları **-istek-kod** yazarak bize iletebilirsiniz.
• Hatalı bi kod veya buglu bi kod bulursanız **-bug-bildir** yazarak bize bildirebilirsiniz.

**• Komutlar**
> [-moderasyon](https://discord.gg/9DsHsK6Y9t) → Moderasyon komudları görüntüler.
> [-kullanıcı](https://discord.gg/9DsHsK6Y9t) → Kullanıcı komutları.
> [-eğlence](https://discord.gg/9DsHsK6Y9t) → eğlence komutları.
> [-eğlence2](https://discord.gg/9DsHsK6Y9t) → eğlence komutları.
> [-logo](https://discord.gg/9DsHsK6Y9t) → Logo komutları.
> [-logo2](https://discord.gg/9DsHsK6Y9t) → logo komutları.

**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**
> :bulb: **Discord Js Sürümü : 12.4.0**
> :robot: **quick.db Sürümü : 7.1.2**
> :eye_in_speech_bubble: **moment Sürümü : 2.29.1**
© 2021 LMU | Tüm hakları saklıdır.
`);

  return message.channel.send(EmbedPinCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardımv2",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-yardım"
};
