import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieConsentPopup from "@/components/shared/CookieConsentPopup";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Integrations from "./pages/Integrations";
import Pricing from "./pages/Pricing";
import Docs from "./pages/Docs";
import Documentation from "./pages/Documentation";
import Status from "./pages/Status";
import Blog from "./pages/Blog";
import AllPosts from "./pages/AllPosts";
import BlogPost from "./pages/BlogPost";
import Security from "./pages/Security";
import SecurityWhitepaper from "./pages/SecurityWhitepaper";
import BugBountyProgramme from "./pages/BugBountyProgramme";
import RequestCustomDocumentation from "./pages/RequestCustomDocumentation";
import ScheduleSecurityReview from "./pages/ScheduleSecurityReview";
import ScheduleConsultationCall from "./pages/ScheduleConsultationCall";
import FAQ from "./pages/FAQ";
import APIDocumentation from "./pages/APIDocumentation";
import About from "./pages/About";
import QuickstartGuide from "./pages/QuickstartGuide";
import Contact from "./pages/Contact";
import ScheduleDemo from "./pages/ScheduleDemo";
import HelpCenter from "./pages/HelpCenter";
import Careers from "./pages/Careers";
import OpenPositions from "./pages/OpenPositions";
import JobApplication from "./pages/JobApplication";
import HRContact from "./pages/HRContact";
import TechnicalSupport from "./pages/TechnicalSupport";
import SubProcessorsList from "./pages/SubProcessorsList";
import ComplianceCertificates from "./pages/ComplianceCertificates";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import SignUpVerification from "./pages/auth/SignUpVerification";
import ForgotPassword from "./pages/auth/ForgotPassword";
import SelectPlan from "./pages/subscription/SelectPlan";
import Billing from "./pages/subscription/Billing";
import PaymentSuccess from "./pages/subscription/PaymentSuccess";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import Cookies from "./pages/legal/Cookies";
import Refunds from "./pages/legal/Refunds";
import AUP from "./pages/legal/AUP";
import SLA from "./pages/legal/SLA";
import DPA from "./pages/legal/DPA";
import NotFound from "./pages/NotFound";
import AccountSettings from "./pages/AccountSettings";
import APITester from "./pages/APITester";
import CodeExamples from "./pages/CodeExamples";
import Demo from "./pages/Demo";
import RequestIntegration from "./pages/RequestIntegration";
import ContactSales from "./pages/ContactSales";
import AWSSetupGuide from "./pages/setup-guides/AWSSetupGuide";
import GCPSetupGuide from "./pages/setup-guides/GCPSetupGuide";
import DigitalOceanSetupGuide from "./pages/setup-guides/DigitalOceanSetupGuide";
import MicrosoftAzureSetupGuide from "./pages/setup-guides/MicrosoftAzureSetupGuide";
import VultrSetupGuide from "./pages/setup-guides/VultrSetupGuide";
import HetznerCloudSetupGuide from "./pages/setup-guides/HetznerCloudSetupGuide";
import PostgreSQLSetupGuide from "./pages/setup-guides/PostgreSQLSetupGuide";
import MongoDBSetupGuide from "./pages/setup-guides/MongoDBSetupGuide";
import RedisSetupGuide from "./pages/setup-guides/RedisSetupGuide";
import MariaDBSetupGuide from "./pages/setup-guides/MariaDBSetupGuide";
import SQLiteSetupGuide from "./pages/setup-guides/SQLiteSetupGuide";
import SFTPSCPSetupGuide from "./pages/setup-guides/SFTPSCPSetupGuide";
import LocalStorageSetupGuide from "./pages/setup-guides/LocalStorageSetupGuide";
import NetworkSharesSetupGuide from "./pages/setup-guides/NetworkSharesSetupGuide";
import FTPFTPSSetupGuide from "./pages/setup-guides/FTPFTPSSetupGuide";
import NotionAPIVote from "./pages/vote/NotionAPIVote";
import SupabaseVote from "./pages/vote/SupabaseVote";
import VercelVote from "./pages/vote/VercelVote";
import QuickStartGuide from "./pages/jhelp/QuickStartGuide";
import CreatingFirstBackup from "./pages/jhelp/CreatingFirstBackup";
import UnderstandingBackupTypes from "./pages/jhelp/UnderstandingBackupTypes";
import SettingUpNotifications from "./pages/jhelp/SettingUpNotifications";
import ManagingProfile from "./pages/jhelp/account/ManagingProfile";
import BillingSubscriptions from "./pages/jhelp/account/BillingSubscriptions";
import TeamManagement from "./pages/jhelp/account/TeamManagement";
import AccountSecurity from "./pages/jhelp/account/AccountSecurity";
import SchedulingBackups from "./pages/jhelp/SchedulingBackups";
import RetentionPolicies from "./pages/jhelp/RetentionPolicies";
import DatabaseIntegrations from "./pages/jhelp/DatabaseIntegrations";
import CloudStorageSetup from "./pages/jhelp/CloudStorageSetup";
import WebhookConfiguration from "./pages/jhelp/WebhookConfiguration";
import APIDocumentationGuide from "./pages/jhelp/APIDocumentationGuide";
import BackupEncryption from "./pages/jhelp/BackupEncryption";
import StorageOptions from "./pages/jhelp/StorageOptions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CookieConsentPopup />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/status" element={<Status />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/all" element={<AllPosts />} />
          <Route path="/blog/post/:slug" element={<BlogPost />} />
          <Route path="/security" element={<Security />} />
          <Route path="/security-whitepaper" element={<SecurityWhitepaper />} />
          <Route path="/bug-bounty" element={<BugBountyProgramme />} />
          <Route path="/request-custom-documentation" element={<RequestCustomDocumentation />} />
          <Route path="/schedule-security-review" element={<ScheduleSecurityReview />} />
          <Route path="/schedule-consultation" element={<ScheduleConsultationCall />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/api-docs" element={<APIDocumentation />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/about" element={<About />} />
          <Route path="/quickstart" element={<QuickstartGuide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-sales" element={<ContactSales />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/jobs" element={<OpenPositions />} />
          <Route path="/apply" element={<JobApplication />} />
          <Route path="/hr-contact" element={<HRContact />} />
          <Route path="/technical-support" element={<TechnicalSupport />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/api-tester" element={<APITester />} />
          <Route path="/code-examples" element={<CodeExamples />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/setup-guides/amazon-web-services" element={<AWSSetupGuide />} />
          <Route path="/setup-guides/google-cloud-platform" element={<GCPSetupGuide />} />
          <Route path="/setup-guides/digitalocean" element={<DigitalOceanSetupGuide />} />
          <Route path="/setup-guides/microsoft-azure" element={<MicrosoftAzureSetupGuide />} />
          <Route path="/setup-guides/vultr" element={<VultrSetupGuide />} />
          <Route path="/setup-guides/hetzner-cloud" element={<HetznerCloudSetupGuide />} />
          <Route path="/setup-guides/postgresql" element={<PostgreSQLSetupGuide />} />
          <Route path="/setup-guides/mongodb" element={<MongoDBSetupGuide />} />
          <Route path="/setup-guides/redis" element={<RedisSetupGuide />} />
          <Route path="/setup-guides/mariadb" element={<MariaDBSetupGuide />} />
          <Route path="/setup-guides/sqlite" element={<SQLiteSetupGuide />} />
          <Route path="/setup-guides/sftp-scp" element={<SFTPSCPSetupGuide />} />
          <Route path="/setup-guides/local-storage" element={<LocalStorageSetupGuide />} />
          <Route path="/setup-guides/network-shares" element={<NetworkSharesSetupGuide />} />
          <Route path="/setup-guides/ftp-ftps" element={<FTPFTPSSetupGuide />} />
          <Route path="/vote/notion-api" element={<NotionAPIVote />} />
          <Route path="/vote/supabase" element={<SupabaseVote />} />
          <Route path="/vote/vercel" element={<VercelVote />} />
          <Route path="/request-integration" element={<RequestIntegration />} />
          <Route path="/sub-processors" element={<SubProcessorsList />} />
          <Route path="/compliance-certificates" element={<ComplianceCertificates />} />
          <Route path="/schedule-demo" element={<ScheduleDemo />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup-verification" element={<SignUpVerification />} />
          <Route path="/select-plan" element={<SelectPlan />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/refunds" element={<Refunds />} />
          <Route path="/aup" element={<AUP />} />
          <Route path="/sla" element={<SLA />} />
          <Route path="/dpa" element={<DPA />} />
          <Route path="/jhelp/quick-start-guide" element={<QuickStartGuide />} />
          <Route path="/jhelp/creating-first-backup" element={<CreatingFirstBackup />} />
          <Route path="/jhelp/understanding-backup-types" element={<UnderstandingBackupTypes />} />
          <Route path="/jhelp/setting-up-notifications" element={<SettingUpNotifications />} />
          <Route path="/jhelp/account/managing-profile" element={<ManagingProfile />} />
          <Route path="/jhelp/account/billing-subscriptions" element={<BillingSubscriptions />} />
          <Route path="/jhelp/account/team-management" element={<TeamManagement />} />
          <Route path="/jhelp/account/account-security" element={<AccountSecurity />} />
          <Route path="/jhelp/scheduling-backups" element={<SchedulingBackups />} />
          <Route path="/jhelp/retention-policies" element={<RetentionPolicies />} />
          <Route path="/jhelp/database-integrations" element={<DatabaseIntegrations />} />
          <Route path="/jhelp/cloud-storage-setup" element={<CloudStorageSetup />} />
          <Route path="/jhelp/webhook-configuration" element={<WebhookConfiguration />} />
          <Route path="/jhelp/api-documentation-guide" element={<APIDocumentationGuide />} />
          <Route path="/jhelp/backup-encryption" element={<BackupEncryption />} />
          <Route path="/jhelp/storage-options" element={<StorageOptions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
