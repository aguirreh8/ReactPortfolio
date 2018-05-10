import React from "react";
import "./Contact.css";
import github from "../../images/github.png";
import linkedIn from "../../images/linkedin.png";
import stackOverflow from "../../images/stackoverflow.png";
import email from "../../images/email.png";
import phone from "../../images/phone.png"


const Contact = () => (
	<div className="contact-container">
		<div className="container">
			<h4 className="title">Contact Me</h4>
			<div className="row">
				<div className="col-md-5">
					<p>If you would like to contact me, check any of the links below, or send an email using the form.</p>
					<a className="ext-link"><img src={github} className="thumbnail" alt="github"/>Github</a>
					<a className="ext-link"><img src={linkedIn} className="thumbnail" alt="github"/>LinkedIn</a>
					<a className="ext-link"><img src={stackOverflow} className="thumbnail" alt="github"/>Stack Overflow</a>
					<a className="ext-link"><img src={email} className="thumbnail" alt="github"/>aguirreh8@gmail.com</a>
					<a className="ext-link"><img src={phone} className="thumbnail" alt="github"/>551-222-9775</a>
				</div>
				<div className="col-md-1"></div>
				<div className="col-md-6">
					<form>
						<div className="form-group row">
							<label class="col-sm-2 col-form-label">Name:</label>
							<div class="col-sm-9">
								<input type="input" className="form-control" placeholder="Enter name" />
							</div>
						</div>
						<div className="form-group row">
							<label class="col-sm-2 col-form-label">Email:</label>
							<div class="col-sm-9">
								<input type="email" className="form-control" placeholder="Enter email" />
							</div>
						</div>
						<div className="form-group row">
							<label class="col-sm-2 col-form-label">Subject:</label>
							<div class="col-sm-9">
								<input type="input" className="form-control" placeholder="Enter subject" />
							</div>
						</div>
						<div className="form-group row">
							<label class="col-sm-2 col-form-label">Message:</label>
							<div class="col-sm-9">
								<textarea className="form-control" rows="5" style={{resize: "none"}} placeholder="Enter subject"></textarea>
							</div>
						</div>
						<div className="form-group row">
							<button type="button" class="btn btn-primary btn-lg mx-auto">Send</button>
						</div>
					</form>					
				</div>
			</div>
		</div>
	</div>
)

export default Contact;