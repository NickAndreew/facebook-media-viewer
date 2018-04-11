import React from 'react';
import DropToUpload from 'react-drop-to-upload';
import {Link} from 'react-router-dom';

class DropFiles extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			filesToUpload: [],
			accessToken: '',
			albumName: ''
		}
	
		this.handleDrop = this.handleDrop.bind(this);
		this.handleDropArrayBuffer = this.handleDropArrayBuffer.bind(this);
		this.handleDropDataURI = this.handleDropDataURI.bind(this);
		this.buttonClick = this.buttonClick.bind(this);
	}

	async componentDidMount(){
		window.FB.api('/'+this.props.match.params+'/', function(resp){
			if(){
				var name = resp.name;
				this.setState({albumName: name});
			} else {
				this.setState({albumName: 'Undefined'});
			}
		}.bind(this));
	}

	move() {
		var elem = document.getElementById("myBar");   
		var width = 1;
		var id = setInterval(frame, 10);
		function frame() {
			if (width >= 100) {
				clearInterval(id);
			} else {
				width++; 
				elem.style.width = width + '%'; 
			}
		}
	}
	 
	handleDrop(files) {
		console.log("Number of files "+ files.length); // true
		// console.log(files[0] instanceof File); // true

		var acceptedFiles = [];
		for(var i = 0; i <= files.length-1 ; i++){
			console.log("File: "+files[i].name);
			console.log("Format: "+files[i].name.split(".")[1].toLowerCase());
			var format = files[i].name.split(".")[1].toLowerCase();
			if(format==="jpeg" | format==="jpg" | format==="bmp" | format==="png" | format==="gif" | format==="tiff"){
				acceptedFiles.push(files[i]);
				console.log(files[i].url);
			}
		}

		for(var j = 0; j <= acceptedFiles.length-1 ; j++ ){
			console.log("accepted file "+j+": "+acceptedFiles[j].name);
			this.setState({filesToUpload: acceptedFiles});
		}

		var data = new FormData();
		
		files.forEach((file, index) => {
			data.append('file' + index, file);
		});
	}	
	
	
	buttonClick(){
		// console.log(this.state.filesToUpload);
		var data = this.state.filesToUpload;
		
		// var file = data1[0];
		
		// var reader = new FileReader();

		// reader.onload = function(e) {
		// 	var arrayBuffer = e.target.result;

		// 	var blob = new Blob([arrayBuffer], {type: file.type});

		// 	var data = new FormData();
		// 	data.append('access_token', window.FB.getAccessToken());
		// 	console.log(window.FB.accessToken());
		// 	data.append('source', blob);
		// 	data.append('message', 'Land Cruiser');
		console.log(window.FB.getAccessToken());

			window.FB.api('/me/photos','post', { data: data },
				// method: 'POST',
				// url: "https://img.favcars.com/toyota/land-cruiser/wallpapers_toyota_land-cruiser_1989_7_1600x1200.jpg"
				// 'source': data
			// },
				function(resp){
				console.log(resp);
			});
		// }
		// .done(function(response){
		// 	console.log(response);
		// }).fail(function(response){
		// 	console.log(response);
		// });
	}


	 
	handleDropArrayBuffer(arrayBuffers, files) {
		// console.log(files.length > 0); // true
		// console.log(files.length === arrayBuffers.length); // true
		// console.log("File : "+files[0]); // true
		// console.log(arrayBuffers[0] instanceof ArrayBuffer); // true
	}
	
	handleDropDataURI(dataURIs, files) {
		// console.log(files.length > 0); // true
		// console.log(files.length === dataURIs.length); // true
		// console.log(files[0] instanceof File); // true
		// console.log(typeof dataURIs[0] === 'string'); // true
		// console.log(/^data:(.*);(.*),/.test(dataURIs[0])); // true
		var box = document.getElementById("dropBox");
		
		for(var i = 0; i <= files.length-1 ; i++ ){

			var label = document.createElement("label");

			var input = document.createElement("input");
			input.setAttribute("type", "checkbox");
			input.setAttribute("class", "inputClass")
			
			var imgDiv = document.createElement("div");
			imgDiv.setAttribute("class", "imgDiv");

			var img = document.createElement("img");
			img.setAttribute("class", "imgClass");

			var file = files[i];
			img.file = file;

			imgDiv.appendChild(img);
			imgDiv.appendChild(input);
			label.appendChild(imgDiv);

			box.appendChild(label);

			var reader = new FileReader();
			reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
			reader.readAsDataURL(file);
		}

		this.move();
		// console.log("DataURIs : "+dataURIs);		
	}
	 
	render() {		
		if(this.state.albumName!==''){
			return (
				<div>
					<h3>{this.state.albumName}</h3>
					<Link to='/upload'><h4 className="h4Cl">Back</h4></Link>
					<DropToUpload onDrop={ this.handleDrop } onDropArrayBuffer={ this.handleDropArrayBuffer } onDropDataURI={ this.handleDropDataURI }>
						<div className="dropFilesDiv control-group" id="dropBox">
							<div className="backgroundText"></div>
							<div id="myProgress">
								<div id="myBar"></div>
							</div>
						</div>
						<button className="uploadButton" onClick={ this.buttonClick }>Upload</button>
					</DropToUpload>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default DropFiles;