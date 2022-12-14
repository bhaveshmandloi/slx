import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  certStatusEarnedNotAvailableHeader: {
    id: 'cert.alert.earned.unavailable.header',
    defaultMessage: 'Your grade and certificate will be ready soon!',
    description: 'Header alerting the user that their certificate will be available soon.',
  },
  certStatusDownloadableHeader: {
    id: 'cert.alert.earned.ready.header',
    defaultMessage: 'Congratulations! Your certificate is ready.',
    description: 'Header alerting the user that their certificate is ready.',
  },
  certStatusNotPassingHeader: {
    id: 'cert.alert.notPassing.header',
    defaultMessage: 'You are not eligible for a certificate',
  },
  certStatusNotPassingButton: {
    id: 'cert.alert.notPassing.button',
    defaultMessage: 'View grades',
  },
});

export default messages;
