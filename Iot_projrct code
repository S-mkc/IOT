Arduino Code:- 
#include <SoftwareSerial.h> 
 #deine LED 13  int ecg=1;  int tem=2;  int eye=3;  int gul=4;  int b1; 
SoftwareSerial iot(9,10); SoftwareSerial mySerial(7, 8); 
int b; int c; int d; int d1; int a; int x; void setup() {     
pinMode(ecg, INPUT); pinMode(eye, INPUT); pinMode(tem, INPUT); pinMode(LED,OUTPUT);q23 
Serial.begin(9600); iot.begin(9600); mySerial.begin(9600); 
} void loop() {   x=(millis() / 1000);   a=analogRead(gul);   b=analogRead(ecg);   c=analogRead(eye);   d=analogRead(tem);   d1=(d/2)-3; if(c<300) 
  {     b1 = b1 + 1;       if (b1 > 1) 
    { 
   Serial.println("patient slept");    Serial.println("");   iot.println("patient slept");   
   mySerial.println("AT+CMGF=1");    //Sets the GSM Module in Text Mode     delay(1000);  // Delay of 1000 milli seconds or 1 second 
    mySerial.println("AT+CMGS=\"8870855099"); // Replace x with mobile number     mySerial.write(0x22); 
    mySerial.write(0x0D);  // hex equivalent of Carraige return     mySerial.write(0x0A);  // hex equivalent of newline     delay(2000); 
    mySerial.println("patient slept");     delay(500); 
    mySerial.println((char)26);// ASCII code of CTRL+Z     delay(1000);    delay(5000); 
}   } 
if (c>300) 
  {     b1 = 0; 
  } 
if(a>600) 
  { 
   Serial.println("LOW GLUCOSE LEVEL"); 
   Serial.println(""); 
  iot.println("*LOW GLUCOSE LEVEL#");  
   mySerial.println("AT+CMGF=1");    //Sets the GSM Module in Text Mode     delay(1000);  // Delay of 1000 milli seconds or 1 second     mySerial.println("AT+CMGS=\"8870855099"); // Replace x with mobile number     mySerial.write(0x22); 
    mySerial.write(0x0D);  // hex equivalent of Carraige return     mySerial.write(0x0A);  // hex equivalent of newline     delay(2000); 
    mySerial.println("LOW GLUCOSE LEVEL"); 
    delay(500); 
    mySerial.println((char)26);// ASCII code of CTRL+Z     delay(1000);     delay(5000); 
} if(b<700) 
  {  
   Serial.println("ECG LEVEL LOW"); 
   Serial.println(""); 
  iot.println("*ECG LEVEL LOW#");  
   mySerial.println("AT+CMGF=1");    //Sets the GSM Module in Text Mode     delay(1000);  // Delay of 1000 milli seconds or 1 second 
    mySerial.println("AT+CMGS=\"8870855099"); // Replace x with mobile number     mySerial.write(0x22); 
    mySerial.write(0x0D);  // hex equivalent of Carraige return     mySerial.write(0x0A);  // hex equivalent of newline     delay(2000); 
    mySerial.println("ECG LEVEL LOW"); 
    delay(500); 
    mySerial.println((char)26);// ASCII code of CTRL+Z     delay(1000);     delay(5000); 
} if(d1>40) 
   Serial.println("HIGH TEMPERATURE"); 
   Serial.println(""); 
  iot.println("*HIGH TEMPERATURE#");  
  mySerial.println("AT+CMGF=1");    //Sets the GSM Module in Text Mode     delay(1000);  // Delay of 1000 milli seconds or 1 second 
    mySerial.println("AT+CMGS=\"8870855099"); // Replace x with mobile number     mySerial.write(0x22); 
    mySerial.write(0x0D);  // hex equivalent of Carraige return     mySerial.write(0x0A);  // hex equivalent of newline     delay(2000); 
    mySerial.println("HIGH TEMPERATURE"); 
    delay(500); 
    mySerial.println((char)26);// ASCII code of CTRL+Z     delay(1000);      delay(5000); 
}  if(x>10) 
  { 
  Serial.print("TEMPERATURE="); 
  Serial.println(d1);    Serial.println("");   delay(2000); 
  } 
} 


Code for IoT:- 
A. Login Activity- The code for login into local server website (Front End) 
<%@ Page Title="Log in" Language="C#" MasterPageFile="~/Site.Master" 
AutoEventWireup="true" CodeBehind="Login.aspx.cs" 
Inherits="IntegratingArudinoUNO.Account.Login" %> 
 
<%@ 	Register 	Src="~/Account/OpenAuthProviders.ascx" 	TagPrefix="uc" TagName="OpenAuthProviders" %> 
 
<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent"> 
    <hgroup class="title"> 
        <h1><%: Title %>.</h1> 
    </hgroup> 
    <section id="loginForm"> 
         
        <%--<h2>Use a local account to log in.</h2>--%> 
        <%--<asp:Login runat="server" ViewStateMode="Disabled" 
RenderOuterTable="false"> 
            <LayoutTemplate> 
                <p class="validation-summary-errors"> 
                    <asp:Literal runat="server" ID="FailureText" /> 
                </p> 
                <fieldset> 
                    <legend>Log in Form</legend> 
                    <ol> 
                        <li> 
                            <asp:Label runat="server" AssociatedControlID="UserName">User name</asp:Label> 
                            <asp:TextBox runat="server" ID="UserName" /> 
                            <asp:RequiredFieldValidator 	runat="server" ControlToValidate="UserName" CssClass="field-validation-error" ErrorMessage="The user name field is required." /> 
                        </li> 
                        <li> 
                            <asp:Label 	runat="server" 
AssociatedControlID="Password">Password</asp:Label> 
                            <asp:TextBox runat="server" ID="Password" TextMode="Password" /> 
                            <asp:RequiredFieldValidator 	runat="server" ControlToValidate="Password" 	CssClass="field-validation-error" 	ErrorMessage="The 
password field is required." /> 
                        </li> 
                        <li> 
                            <asp:CheckBox runat="server" ID="RememberMe" /> 
                            <asp:Label runat="server" AssociatedControlID="RememberMe" 
CssClass="checkbox">Remember me?</asp:Label> 
                        </li> 
                    </ol> 
                    <asp:Button 	runat="server" 	ID="btnLogin" 	OnClick="btnLogin_Click" Text="Log in" /> 
                </fieldset> 
            </LayoutTemplate> 
        </asp:Login>--%> 
 
        <table> 
            <tr> 
                <td> 
                    <legend>Log in Form</legend> 
                    <ul> 
                        <li> 
                            <asp:Label ID="Label1" runat="server" 
AssociatedControlID="UserName">User name</asp:Label> 
                            <asp:TextBox runat="server" ID="UserName" /> 
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="UserName" CssClass="field-validation-error" ErrorMessage="The user name field is required." /> 
                        </li> 
                        <li> 
                            <asp:Label ID="Label2" runat="server" 
AssociatedControlID="Password">Password</asp:Label> 
                            <asp:TextBox runat="server" ID="Password" TextMode="Password" /> 
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="Password" 	CssClass="field-validation-error" 	ErrorMessage="The 
password field is required." /> 
                        </li> 
                        <%--<li> 
                            <asp:CheckBox runat="server" ID="RememberMe" /> 
                            <asp:Label ID="Label3" runat="server" 
AssociatedControlID="RememberMe" CssClass="checkbox">Remember me?</asp:Label> 
                        </li>--%> 
                    </ul> 
                    <asp:Button runat="server" ID="btnLogin" OnClick="btnLogin_Click" 
Text="Log in" /></td> 
                <td></td> 
            </tr> 
        </table> 
        <p> 
            <asp:HyperLink runat="server" ID="RegisterHyperLink" 
ViewStateMode="Disabled">Register</asp:HyperLink> 
            if you don't have an account. 
        </p> 
    </section> 
 
    <section id=""> 
        <%--<h2>Use another service to log in.</h2>--%> 
        <uc:OpenAuthProviders runat="server" ID="OpenAuthLogin" /> 
    </section> 
</asp:Content> 


B. Code for Registration page (Front End) 
 
<%@ Page Title="Register" Language="C#" MasterPageFile="~/Site.Master" 
AutoEventWireup="true" CodeBehind="Register.aspx.cs" 
Inherits="IntegratingArudinoUNO.Account.Register" %> 
 
<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent"> 
    <table> 
        <tr> 
            <td> 
                <%-- <hgroup class="title"> 
                    <h1><%: Title %>.</h1> 
                    <h2>Use the form below to create a new account.</h2> 
                </hgroup>--%> 
            </td> 
            <td> 
                <asp:Label runat="server" ID="lbltitle" Style="font-weight: bold" Text=""> </asp:Label> 
            </td> 
        </tr> 
    </table> 
    <table style="vertical-align: central"> 
        <tr> 
            <td> 
                <legend>Registration Form</legend> 
                <ul> 
                    <li> 
                        <asp:Label ID="Label1" runat="server" 
AssociatedControlID="UserName">User name</asp:Label> 
                        <asp:TextBox runat="server" ID="UserName" /> 
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="UserName" 
                            CssClass="field-validation-error" ErrorMessage="The user name field is required." /> 
                    </li> 
                    <li> 
                        <asp:Label ID="Label2" runat="server" AssociatedControlID="Email">Email address</asp:Label> 
                        <asp:TextBox runat="server" ID="Email" TextMode="Email" /> 
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="Email" 
                            CssClass="field-validation-error" ErrorMessage="The email address field is required." /> 
                    </li> 
                    <li> 
                        <asp:Label ID="Label3" runat="server" 
AssociatedControlID="Password">Password</asp:Label> 
                        <asp:TextBox runat="server" ID="Password" TextMode="Password" /> 
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="Password" 
                            CssClass="field-validation-error" ErrorMessage="The password field is required." /> 
                    </li> 
                    <li> 
                        <asp:Label ID="Label4" runat="server" 
AssociatedControlID="ConfirmPassword">Confirm password</asp:Label> 
                        <asp:TextBox runat="server" ID="ConfirmPassword" TextMode="Password" /> 
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ControlToValidate="ConfirmPassword" 
                            CssClass="field-validation-error" Display="Dynamic" ErrorMessage="The confirm password field is required." /> 
                        <asp:CompareValidator 	ID="CompareValidator1" 	runat="server" ControlToCompare="Password" ControlToValidate="ConfirmPassword" 
                            CssClass="field-validation-error" Display="Dynamic" ErrorMessage="The password and confirmation password do not match." /> 
                    </li> 
                </ul> 
                <asp:Button 	runat="server" 	ID="btnRegister" 	OnClick="btnRegister_Click" Text="Register" /> 
 
            </td> 
        </tr> 
    </table> 
 
    <%--<asp:CreateUserWizard runat="server" ID="RegisterUser" 
ViewStateMode="Disabled" OnCreatedUser="RegisterUser_CreatedUser"> 
        <LayoutTemplate> 
            <asp:PlaceHolder runat="server" ID="wizardStepPlaceholder" /> 
            <asp:PlaceHolder runat="server" ID="navigationPlaceholder" /> 
        </LayoutTemplate> 
        <WizardSteps> 
            <asp:CreateUserWizardStep runat="server" ID="RegisterUserWizardStep"> 
                <ContentTemplate> 
                    <p class="message-info"> 
                        Passwords are required to be a minimum of <%: 
Membership.MinRequiredPasswordLength %> characters in length. 
                    </p> 
 
                    <p class="validation-summary-errors"> 
                        <asp:Literal runat="server" ID="ErrorMessage" /> 
                    </p> 
 
                    <fieldset> 
                        <legend>Registration Form</legend> 
                        <ol> 
                            <li> 
                                <asp:Label runat="server" AssociatedControlID="UserName">User name</asp:Label> 
                                <asp:TextBox runat="server" ID="UserName" /> 
                                <asp:RequiredFieldValidator runat="server" 
ControlToValidate="UserName" 
                                    CssClass="field-validation-error" ErrorMessage="The user name field is required." /> 
                            </li> 
                            <li> 
                                <asp:Label runat="server" AssociatedControlID="Email">Email address</asp:Label> 
                                <asp:TextBox runat="server" ID="Email" TextMode="Email" /> 
                                <asp:RequiredFieldValidator runat="server" ControlToValidate="Email"                                     CssClass="field-validation-error" ErrorMessage="The email address field is required." /> 
                            </li> 
                            <li> 
                                <asp:Label 	runat="server" 
AssociatedControlID="Password">Password</asp:Label> 
                                <asp:TextBox runat="server" ID="Password" TextMode="Password" /> 
                                <asp:RequiredFieldValidator runat="server" ControlToValidate="Password" 
                                    CssClass="field-validation-error" ErrorMessage="The password field is required." /> 
                            </li> 
                            <li> 
                                <asp:Label 	runat="server" 
AssociatedControlID="ConfirmPassword">Confirm password</asp:Label> 
                                <asp:TextBox 	runat="server" 
TextMode="Password" /> 	ID="ConfirmPassword" 
                                <asp:RequiredFieldValidator 
ControlToValidate="ConfirmPassword" 	runat="server" 
                                    CssClass="field-validation-error" 	Display="Dynamic" 
ErrorMessage="The confirm password field is required." /> 
                                <asp:CompareValidator runat="server" ControlToCompare="Password" ControlToValidate="ConfirmPassword" 
                                    CssClass="field-validation-error" Display="Dynamic" 
ErrorMessage="The password and confirmation password do not match." /> 
                            </li> 
                        </ol> 
                        <asp:Button runat="server" ID="btnRegister" OnClick="btnRegister_Click" Text="Register" /> 
 
    </fieldset> 
                </ContentTemplate> 
                <CustomNavigationTemplate /> 
            </asp:CreateUserWizardStep> 
        </WizardSteps> 
    </asp:CreateUserWizard>--%> 
</asp:Content> 
 


C. Code for Register external coding (Front End) 
 
<%@ Page Language="C#" Title="Register an external login" 
MasterPageFile="~/Site.Master" AutoEventWireup="true" 
CodeBehind="RegisterExternalLogin.aspx.cs" 
Inherits="IntegratingArudinoUNO.Account.RegisterExternalLogin" %> 
<asp:Content ContentPlaceHolderID="MainContent" runat="server"> 
    <hgroup class="title"> 
        <h1>Register with your <%: ProviderDisplayName %> account</h1> 
        <h2><%: ProviderUserName %>.</h2> 
    </hgroup> 
    <asp:ModelErrorMessage runat="server" ModelStateKey="Provider" CssClass="fieldvalidation-error" /> 
    <asp:PlaceHolder runat="server" ID="userNameForm"> 
        <fieldset> 
            <legend>Association Form</legend> 
            <p> 
                You've authenticated with <strong><%: ProviderDisplayName %></strong> as                 <strong><%: ProviderUserName %></strong>. Please enter a user name below for the current site                 and click the Log in button. 
            </p> 
            <ol> 
                <li class="email"> 
                    <asp:Label runat="server" AssociatedControlID="userName">User name</asp:Label> 
                    <asp:TextBox runat="server" ID="userName" /> 
                    <asp:RequiredFieldValidator runat="server" ControlToValidate="userName" 
                        Display="Dynamic" ErrorMessage="User name is required" 
ValidationGroup="NewUser" /> 
                     
                    <asp:ModelErrorMessage runat="server" ModelStateKey="UserName" CssClass="field-validation-error" />      
                </li> 
            </ol> 
            <asp:Button runat="server" Text="Log in" ValidationGroup="NewUser" 
OnClick="logIn_Click" /> 
            <asp:Button runat="server" Text="Cancel" CausesValidation="false" 
OnClick="cancel_Click" /> 
        </fieldset> 
    </asp:PlaceHolder> 
</asp:Content> 
 


D. Code for login page (Back End) using IntegratingArudinoUNO.Entities; using System; 
using System.Collections.Generic; using System.Configuration; using System.Linq; using System.Web; using System.Web.UI; using System.Web.UI.WebControls; using System.Data; 
 
namespace IntegratingArudinoUNO.Account 
{ 
    public partial class Login : Page 
    { 
        public string connectionString = null; 
        public string SP_GetLoginDetails = "SP_LoginAuthentication";         public ConnectionStringSettings connectionSettings = null;         public DBFactory.DBFactory dbFactory = null;         public UserDetailsEntity userDetails = null; 
        public List<UserDetailsEntity> usersDetail = new List<UserDetailsEntity>(); 
 
        protected void Page_Load(object sender, EventArgs e) 
        { 
            RegisterHyperLink.NavigateUrl = "Register.aspx"; 
            OpenAuthLogin.ReturnUrl = Request.QueryString["ReturnUrl"]; 
 
            var returnUrl = HttpUtility.UrlEncode(Request.QueryString["ReturnUrl"]);             if (!String.IsNullOrEmpty(returnUrl)) 
            { 
                RegisterHyperLink.NavigateUrl += "?ReturnUrl=" + returnUrl; 
            } 
        } 
 
        protected void btnLogin_Click(object sender, EventArgs e) 
        { 
            connectionSettings 	= 
ConfigurationManager.ConnectionStrings["DefaultConnection"];             connectionString = connectionSettings.ConnectionString;             dbFactory = new DBFactory.DBFactory();             DataSet dsUserDetails = new DataSet();             userDetails = new UserDetailsEntity(); 
 
            Dictionary<string, string> sqlParameters = new Dictionary<string, string>();             userDetails.EmailAddress = UserName.Text; userDetails.Password = Password.Text;             sqlParameters.Add("@EmailAddress", userDetails.EmailAddress); sqlParameters.Add("@Password", userDetails.Password); 
 
            dsUserDetails = dbFactory.GetData(SP_GetLoginDetails, connectionString, sqlParameters); 
            if (dsUserDetails.Tables[0].Rows.Count > 0) 
            { 
                Session["LoginID"] = dsUserDetails.Tables[0].Rows[0][1]; 
                Response.Redirect("../Default.aspx"); 
            } 
        } 
    } 
} 


E. Code for Managing the Password is correct or not (Back End) 
 
using IntegratingArudinoUNO.Entities; using System; 
using System.Collections.Generic; using System.Configuration; using System.Linq; using System.Web; using System.Web.UI; using System.Web.UI.WebControls; using System.Data; 
 
namespace IntegratingArudinoUNO.Account 
{ 
    public partial class Login : Page 
    { 
        public string connectionString = null; 
        public string SP_GetLoginDetails = "SP_LoginAuthentication";         public ConnectionStringSettings connectionSettings = null;         public DBFactory.DBFactory dbFactory = null;         public UserDetailsEntity userDetails = null; 
        public List<UserDetailsEntity> usersDetail = new List<UserDetailsEntity>(); 
 
        protected void Page_Load(object sender, EventArgs e) 
        { 
            RegisterHyperLink.NavigateUrl = "Register.aspx"; 
            OpenAuthLogin.ReturnUrl = Request.QueryString["ReturnUrl"]; 
 
            var returnUrl = HttpUtility.UrlEncode(Request.QueryString["ReturnUrl"]);             if (!String.IsNullOrEmpty(returnUrl)) 
            { 
                RegisterHyperLink.NavigateUrl += "?ReturnUrl=" + returnUrl; 
            } 
        } 
 
        protected void btnLogin_Click(object sender, EventArgs e) 
        { 
            connectionSettings 	= 
ConfigurationManager.ConnectionStrings["DefaultConnection"];             connectionString = connectionSettings.ConnectionString;             dbFactory = new DBFactory.DBFactory();             DataSet dsUserDetails = new DataSet();             userDetails = new UserDetailsEntity(); 
 
            Dictionary<string, string> sqlParameters = new Dictionary<string, string>();             userDetails.EmailAddress = UserName.Text; userDetails.Password = Password.Text;             sqlParameters.Add("@EmailAddress", userDetails.EmailAddress); sqlParameters.Add("@Password", userDetails.Password); 
 
            dsUserDetails = dbFactory.GetData(SP_GetLoginDetails, connectionString, sqlParameters); 
            if (dsUserDetails.Tables[0].Rows.Count > 0) 
            { 
                Session["LoginID"] = dsUserDetails.Tables[0].Rows[0][1]; 
                Response.Redirect("../Default.aspx"); 
            } 
        }}} 
        
        
        
F. Code for open authorized provider(Back End) 
 
<%@ Control Language="C#" AutoEventWireup="true" 
CodeBehind="OpenAuthProviders.ascx.cs" 
Inherits="IntegratingArudinoUNO.Account.OpenAuthProviders" %> 
 
<fieldset class="open-auth-providers"> 
    <legend>Log in using another service</legend> 
     
    <asp:ListView runat="server" ID="providerDetails" 
ItemType="Microsoft.AspNet.Membership.OpenAuth.ProviderDetails" 
        SelectMethod="GetProviderNames" ViewStateMode="Disabled"> 
        <ItemTemplate> 
            <button type="submit" name="provider" value="<%#: Item.ProviderName %>"                 title="Log in using your <%#: Item.ProviderDisplayName %> account."> 
                <%#: Item.ProviderDisplayName %> 
            </button> 
        </ItemTemplate> 
     
        <EmptyDataTemplate> 
            <%--<div class="message-info"> 
                <p>There are no external authentication services configured. See <a 
href="http://go.microsoft.com/fwlink/?LinkId=252803">this article</a> for details on setting up this ASP.NET application to support logging in via external services.</p> 
            </div>--%> 
        </EmptyDataTemplate> 
    </asp:ListView> 
</fieldset> 


      
G. Code for Web configuration (Connecting String) 

<?xml version="1.0" encoding="utf-8"?> 
<!-- 
  For more information on how to configure your ASP.NET application, please visit   http://go.microsoft.com/fwlink/?LinkId=169433 
  --> 
<configuration> 
  <configSections> 
    <!-- 	For 	more 	information 	on 	Entity 	Framework 	configuration, 	visit http://go.microsoft.com/fwlink/?LinkID=237468 --> 
    <section 	name="entityFramework" 
type="System.Data.Entity.Internal.ConfigFile.EntityFrameworkSection, 
EntityFramework, Version=5.0.0.0, Culture=neutral, 
PublicKeyToken=b77a5c561934e089" requirePermission="false" /> 
 
  </configSections> 
  <connectionStrings> 
    <add 	name="DefaultConnection" 	providerName="System.Data.SqlClient" connectionString="Data 
Source=(LocalDB)\v11.0;AttachDbFilename=D:\IntegratingArudinoUNO\IntegratingAru dinoUNO\App_Data\Arudino.mdf;Integrated Security=True;Connect Timeout=30" /> 
  </connectionStrings> 
  <system.web> 
    <compilation debug="true" targetFramework="4.5" /> 
    <httpRuntime targetFramework="4.5" /> 
    <pages> 
      <namespaces> 
        <add namespace="System.Web.Optimization" /> 
      </namespaces> 
      <controls> 
        <add assembly="Microsoft.AspNet.Web.Optimization.WebForms" namespace="Microsoft.AspNet.Web.Optimization.WebForms" tagPrefix="webopt" /> 
      </controls> 
    </pages> 
    <authentication mode="Forms"> 
      <forms loginUrl="~/Account/Login.aspx" timeout="2880" /> 
    </authentication> 
    <profile defaultProvider="DefaultProfileProvider"> 
      <providers> 
        <add 	name="DefaultProfileProvider" 
type="System.Web.Providers.DefaultProfileProvider, System.Web.Providers, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" 
connectionStringName="DefaultConnection" applicationName="/" /> 
      </providers> 
    </profile> 
    <membership defaultProvider="DefaultMembershipProvider"> 
      <providers> 
        <add name="DefaultMembershipProvider" 
type="System.Web.Providers.DefaultMembershipProvider, System.Web.Providers, 
Version=1.0.0.0, 	Culture=neutral, 	PublicKeyToken=31bf3856ad364e35" 
connectionStringName="DefaultConnection" 	enablePasswordRetrieval="false" 
enablePasswordReset="true" 	requiresQuestionAndAnswer="false" 
requiresUniqueEmail="false" 	maxInvalidPasswordAttempts="5" 
minRequiredPasswordLength="6" 	minRequiredNonalphanumericCharacters="0" passwordAttemptWindow="10" applicationName="/" /> 
      </providers> 
    </membership> 
    <roleManager defaultProvider="DefaultRoleProvider"> 
      <providers> 
        <add 	name="DefaultRoleProvider" 
type="System.Web.Providers.DefaultRoleProvider, System.Web.Providers, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" 
connectionStringName="DefaultConnection" applicationName="/" /> 
      </providers> 
    </roleManager> 
    <sessionState mode="InProc" customProvider="DefaultSessionProvider"> 
      <providers> 
        <addname="DefaultSessionProvider" 
type="System.Web.Providers.DefaultSessionStateProvider, System.Web.Providers, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" 
connectionStringName="DefaultConnection" /> 
      </providers> 
    </sessionState> 
  </system.web> 
  <entityFramework>     <defaultConnectionFactory 
type="System.Data.Entity.Infrastructure.LocalDbConnectionFactory, EntityFramework">       <parameters> 
        <parameter value="v11.0" /> 
      </parameters> 
    </defaultConnectionFactory> 
  </entityFramework> 
</configuration> 



H. Code for Inheriting the Integrating ArudinoUNO Software 
 
<%@ Master Language="C#" AutoEventWireup="true" CodeBehind="Site.master.cs" Inherits="IntegratingArudinoUNO.SiteMaster" %> 
 
<!DOCTYPE html> 
<html lang="en"> 
<head runat="server"> 
    <meta charset="utf-8" /> 
    <title><%: Page.Title %> - My ASP.NET Application</title> 
    <asp:PlaceHolder runat="server"> 
        <%: Scripts.Render("~/bundles/modernizr") %> 
    </asp:PlaceHolder> 
    <webopt:BundleReference runat="server" Path="~/Content/css" /> 
    <link href="~/favicon.ico" rel="shortcut icon" type="image/x-icon" /> 
    <meta name="viewport" content="width=device-width" /> 
    <asp:ContentPlaceHolder runat="server" ID="HeadContent" /> 
</head> 
<body> 
    <form runat="server"> 
        <asp:ScriptManager runat="server"> 
            <Scripts> 
                <%--Framework Scripts--%> 
                <asp:ScriptReference Name="MsAjaxBundle" /> 
                <asp:ScriptReference Name="jquery" /> 
                <asp:ScriptReference Name="jquery.ui.combined" /> 
                <asp:ScriptReference 	Name="WebForms.js" 	Assembly="System.Web" Path="~/Scripts/WebForms/WebForms.js" /> 
                <asp:ScriptReference Name="WebUIValidation.js" Assembly="System.Web" 
Path="~/Scripts/WebForms/WebUIValidation.js" /> 
                <asp:ScriptReference 	Name="MenuStandards.js" 
Path="~/Scripts/WebForms/MenuStandards.js" /> 	Assembly="System.Web" 
                <asp:ScriptReference 	Name="GridView.js" 
Path="~/Scripts/WebForms/GridView.js" /> 	Assembly="System.Web" 
                <asp:ScriptReference 	Name="DetailsView.js" 
Path="~/Scripts/WebForms/DetailsView.js" /> 	Assembly="System.Web" 
                <asp:ScriptReference 	Name="TreeView.js" 
Path="~/Scripts/WebForms/TreeView.js" /> 	Assembly="System.Web" 
                <asp:ScriptReference 	Name="WebParts.js" 
Path="~/Scripts/WebForms/WebParts.js" /> 	Assembly="System.Web" 
                <asp:ScriptReference 	Name="Focus.js" 	Assembly="System.Web" 
Path="~/Scripts/WebForms/Focus.js" /> 
                <asp:ScriptReference Name="WebFormsBundle" /> 
                <%--Site Scripts--%> 
            </Scripts> 
        </asp:ScriptManager> 
        <header> 
            <div class="content-wrapper">                 <%--<div class="float-left"> 
                <p class="site-title"> 
                    <a runat="server" href="~/">your logo here</a> 
                </p> 
            </div>--%> 
                <div class="float-right"> 
                    <section id="login"> 
                        <asp:LoginView runat="server" ViewStateMode="Disabled"> 
                            <AnonymousTemplate> 
                                <ul> 
                                    <li><a 	id="registerLink" href="~/Account/Register.aspx">Register</a></li> 	runat="server" 
                                    <li><a 	id="loginLink" href="~/Account/Login.aspx">Log in</a></li> 
                                </ul> 
                            </AnonymousTemplate> 
                            <LoggedInTemplate> 
                                <p> 	runat="server" 
                                    Hello, 	<a 	runat="server" 	class="username" 
href="~/Account/Manage.aspx" title="Manage your account"> 
                                        <asp:LoginName runat="server" CssClass="username" /> 
                                    </a>! 
                                <asp:LoginStatus runat="server" LogoutAction="Redirect" 
LogoutText="Log off" LogoutPageUrl="~/" /> 
                                </p> 
                            </LoggedInTemplate> 
                        </asp:LoginView> 
                    </section> 
                    <nav> 
                        <%--<ul id="menu"> 
                        <li><a runat="server" href="~/">Home</a></li> 
                        <li><a runat="server" href="~/About.aspx">About</a></li> 
                        <li><a runat="server" href="~/Contact.aspx">Contact</a></li> 
                    </ul>--%> 
                    </nav> 
                </div> 
            </div> 
        </header> 
        <div id="body"> 
            <asp:ContentPlaceHolder runat="server" ID="FeaturedContent" /> 
            <section class="content-wrapper main-content clear-fix"> 
                <asp:ContentPlaceHolder runat="server" ID="MainContent" /> 
            </section> 
        </div> 
        <footer> 
            <div class="content-wrapper"> 
                <%--<div class="float-left"> 
                <p>&copy; <%: DateTime.Now.Year %> - My ASP.NET Application</p> 
            </div>--%> 
            </div> 
        </footer> 
    </form> 
</body> 
</html> 
 
