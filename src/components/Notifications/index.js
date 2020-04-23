import React, { useState } from 'react';
import { MdNotifications } from 'react-icons/md';

import themes from '~/styles/themes/light';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread>
        <MdNotifications color={themes.color.primary} size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          <Notification unread>
            <p>Você possui uma nova notificação</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui uma nova notificação</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui uma nova notificação</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification unread>
            <p>Você possui uma nova notificação</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui uma nova notificação</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui uma nova notificação</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
