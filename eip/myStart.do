




<!DOCTYPE html>
<html>
<head>
<title>Login</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style type="text/css">

.background {
	background-color: #777 !important;
}

.saHint {
	padding-top: 20pt;
	font-size: 10pt;
	line-height: normal;
	color: red;
}

.errorMessage {
	color: #FF0000;
	padding-bottom: 10pt;
}
</style>
<link rel='stylesheet' href='/eip/css/bootstrap.min.css'>
<link rel="stylesheet" href='/eip/font-awesome/css/font-awesome.min.css'>
<link rel="stylesheet" href='/eip/jQuery/kendoui/styles/kendo.common.min.css' />
<link rel="stylesheet" href='/eip/jQuery/kendoui/styles/kendo.blueopal.min.css' />
<link rel="stylesheet" href='/eip/jQuery/kendoui/styles/kendo.dataviz.min.css' />
<link rel="stylesheet" href='/eip/jQuery/kendoui/styles/kendo.dataviz.blueopal.min.css' />

<!-- <link rel="stylesheet" href="css/form-elements.css"> -->
<link rel="stylesheet" href="/eip/css/login-style.css ">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->

<script type="text/javascript" src="/eip/jQuery/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/eip/jQuery/jquery-ui-1.13.3.min.js"></script>
<script type="text/javascript" src="/eip/js/jquery.backstretch.min.js "></script>
<script type="text/javascript" src="/eip/js/login-scripts.js "></script> <!-- Login Form Validation-->
<script src='/eip/jQuery/kendoui/js/kendo.all.min.js'></script>
<script type="text/javascript">
	$(document).ready(function(){
		 /*
        	Fullscreen background
	    	*/
	    	$.backstretch("/eip/images/backgrounds/2.jpg");
		
		var saWindow = $(".instructionForCustomer").kendoWindow({
                width: "600px",
                height: "400px",
                modal: true,
                title: "EIP Accounts have been moved",
                visible: false,
                actions: [
                    "Close"
                ]
         }).data("kendoWindow");
         
		 $("#showSaDetail").click(function() {
	         saWindow.center().open();
		 });
	    	
	});
	
</script>
</head>

<body class="background">
<div class="instructionForCustomer" style="display: none;">
	<div style="margin: 40pt; padding-top: 10pt; text-align: left;">
	    <p>Customers' EIP accounts have been moved to AMI Portal. Please use AMI Portal account name and password to log on. Should you not have received your AMI Portal account, please click <a href="https://account.ami.com/_layouts/15/ami_ca/account_retrieval.aspx/">here</a></p>
		<p style="padding-top: 20pt;">The AMI Portal account name is "customer\ACCOUNT_ID".</p>
		<p style="padding-top: 20pt; color: red;">Existing EIP credentials will no longer work after May 1st 2018. Please use your new AMI Portal account</p>
	</div>  
</div>
<div class="top-content">        	
	<div class="inner-bg">
		<div class="container">
			<div class="row">
                        <div class="col-sm-8 col-sm-offset-2 text">
                        	<a href="./"><img src="/eip/images/ami2.0-logo_no-tagline_Q4-2019.png"  width="400px"/></a>
                            <h1 style="margin-top: 20pt;">Engineering Information Portal</h1>
                            <div class="description">
                            	<!-- <p>
                            	</p> -->
                            </div>
                        </div>
            </div>
            <div class="row">
                 <div class="col-sm-6 col-sm-offset-3 form-box">
                        <div class="form-top">
	                        <div class="form-top-left">
								
                            	<div>Please enter your user id and password to log on:</div>
					            <!--  
					            <div class="saHint">Customers' EIP accounts have been moved to AMI Portal. Should you have issues logging on, please click <a href="javascript:" id="showSaDetail"><b><font color="red">here</font></b></a> for more information.</div>
					            -->
					            <!-- 
					            <div class="saHint">
						            <p>Dear Customer:</p>
						            <p>
										We are simplifying the login process to EIP.
										Please get your new ID/PW <a href="https://account.ami.com/_layouts/15/ami_ca/account_retrieval.aspx/" target="_top"><b><font color="red"><u>here</u></font></b></a> if you are unable to login EIP.
						            </p>
					            </div>
					             -->
	                        </div>
	                        <div class="form-top-right">
	                        	<i class="fa fa-lock fa-4x"></i>
	                        </div>
                  		</div>
	            		    <div class="form-bottom">
							<form name="loginForm" class="login-form" action="/eip/j_security_check" method="post" onsubmit="this.j_username.value=this.j_username.value.toLowerCase();">
								<div class="form-group">
							        <label class="sr-only" for="form-username">User Id</label>
							        <input type="text" id="inputEmail" name="j_username" class="form-control" placeholder="User Id" required autofocus>
						        </div>
						        <div class="form-group">
							        <label class="sr-only" for="form-password">Password</label>
							        <input type="password" id="inputPassword" name="j_password" class="form-control" placeholder="Password" required>
						        </div>
					        		<button class="btn btn-md btn-primary" name="Submit" type="submit">Sign in</button>
													        		
							</form>
					        <div class="form-group" style="padding-top: 20pt; text-align: center;">
					          	<!-- Struts Forward Action -->
					            <a href="/eip/resetPasswordForm.jsp" class="">Forgot your password?</a>
					        </div>
						</div>
				</div>	<!-- column -->
			</div>	<!-- row -->
		</div> <!-- bootstrap class container -->
	</div> <!-- bootstrap inner-bg -->
</div> <!-- bootstrap top-content -->
</body>
</html>
