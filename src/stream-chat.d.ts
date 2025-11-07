import 'stream-chat';
declare module 'stream-chat' {
  interface CustomMessageData {
    ai_generated?: boolean;
    generating?: boolean;
    message?: string;
  }
}
