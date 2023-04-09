import { ReactComponent as TelegramLogo } from '../../assets/images/telegram.svg';
import { ReactComponent as ViberLogo } from '../../assets/images/viber.svg';
import { ReactComponent as WhatsappLogo } from '../../assets/images/whatsapp.svg';

const SocialLink = ({ type, size, path }) => {
  return (
    <a href={path}>
      {type === 'telegram' && (
        <TelegramLogo title={type} width={size} height={size} />
      )}
      {type === 'viber' && (
        <ViberLogo title={type} width={size} height={size} />
      )}
      {type === 'whatsapp' && (
        <WhatsappLogo title={type} width={size} height={size} />
      )}
    </a>
  );
};

export default SocialLink;
