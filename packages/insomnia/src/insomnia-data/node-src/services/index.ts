import * as apiSpecService from './api-spec';
import * as caCertificateService from './ca-certificate';
import * as clientCertificateService from './client-certificate';
import * as cloudCredentialService from './cloud-credential';
import * as gitCredentialsService from './git-credentials';
import * as gitRepositoryService from './git-repository';
import * as mcpPayloadService from './mcp-payload';
import * as mcpRequestService from './mcp-request';
import * as mcpResponseService from './mcp-response';
import * as runnerTestResultService from './runner-test-result';
import * as settingsService from './settings';

export const servicesNodeImpl = {
  apiSpec: apiSpecService,
  caCertificate: caCertificateService,
  clientCertificate: clientCertificateService,
  cloudCredential: cloudCredentialService,
  gitCredentials: gitCredentialsService,
  gitRepository: gitRepositoryService,
  mcpPayload: mcpPayloadService,
  mcpRequest: mcpRequestService,
  mcpResponse: mcpResponseService,
  runnerTestResult: runnerTestResultService,
  settings: settingsService,
} as const;
