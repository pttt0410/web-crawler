var express = require('express'),
	request = require('request'),
	cheerio = require('cheerio'),
	app = express();
 
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views' , './views');
app.listen(3002, function (req, res) {
	// body...
	console.log('server start');

});
var arr = [] ;
app.get('/', function(req, res){


	for (let i = 556; i < 570; i ++){
		request("http://online.gov.vn/WebsiteDisplay.aspx?DocId=" + i , function (err, response, body) {
			if(err){
				console.log(err);
			} else{
				$ = cheerio.load(body);
				if(body.indexOf("reg-subtitle") == -1){
					console.log(i ,"Khong ton tai");
					
				}
				else {
					// id
					arr.push(i);
					//Tên website
					let name = $(body).find("#ctl00_ContentPlaceHolder1_lblName");
					var nameText;
					name.each(function(i, e){
						nameText = $(this).text();
					});
					arr.push(nameText);
					
					//Địa chỉ tên miền
					let domain = $(body).find("#ctl00_ContentPlaceHolder1_lblDomain");
					var domainText;
					domain.each(function(i, e){
						domainText = $(this).text();
					});
					arr.push(domainText);

					//loại website
					let typeName = $(body).find("#ctl00_ContentPlaceHolder1_lblWebsiteTypeName");
					var typeNameText;
					typeName.each(function(i, e){
						typeNameText = $(this).text();
					});
					arr.push(typeNameText);

					//Người chịu trách nhiệm
					let representer = $(body).find("#ctl00_ContentPlaceHolder1_lblRepresenter");
					var representerText;
					representer.each(function(i, e){
						representerText = $(this).text();
					});
					arr.push(representerText);

					//Tên doanh nghiệp
					let companyName = $(body).find("#ctl00_ContentPlaceHolder1_lblCompanyName");
					var companyNameText;
					companyName.each(function(i, e){
						companyNameText = $(this).text();
					});
					arr.push(companyNameText);
					
					//MST/ĐKKD/QĐTL
					let companyTaxCode = $(body).find("#ctl00_ContentPlaceHolder1_lblCompanyTaxCode");
					var companyTaxCodeText;
					companyTaxCode.each(function(i, e){
						companyTaxCodeText = $(this).text();
					});
					arr.push(companyTaxCodeText);

					
					//Trụ sở doanh nghiệp
					let companyAddress = $(body).find("#ctl00_ContentPlaceHolder1_lblCompanyAddress");
					var companyAddressText;
					companyAddress.each(function(i, e){
						companyAddressText = $(this).text();
					});
					arr.push(companyAddressText);
					
					//Tỉnh/thành phố
					let departmentName = $(body).find("#ctl00_ContentPlaceHolder1_lblDepartmentName");
					var departmentNameText;
					departmentName.each(function(i, e){
						departmentNameText = $(this).text();
					});
					arr.push(departmentNameText);

					//Quốc gia
					let nationalName = $(body).find("#ctl00_ContentPlaceHolder1_lblNationalName");
					var nationalNameText;
					nationalName.each(function(i, e){
						nationalNameText = $(this).text();
					});
					arr.push(nationalNameText);

					//Điện thoại
					let companyPhone = $(body).find("#ctl00_ContentPlaceHolder1_lblCompanyPhone");
					var companyPhoneText;
					companyPhone.each(function(i, e){
						companyPhoneText = $(this).text();
					});
					arr.push(companyPhoneText);
					arr.push("-------------------------------");
				//console.log(arr);
				//	console.log(i, $('#ctl00_ContentPlaceHolder1_lblName').text());
					
				}
			}

		});
	}
	res.render('index', {arr: arr})
});

var cus = [];
app.get('/custom', function(req, res){


	for (let i = 556; i < 570; i ++){
		request("http://online.gov.vn/CustomWebsiteDisplay.aspx?DocId=" + i , function (err, response, body) {
			if(err){
				console.log(err);
			} else{
				$ = cheerio.load(body);
				if(body.indexOf("reg-subtitle") == -1){
					console.log(i ,"Khong ton tai");
					
				}
				else {

					// id
					cus.push(i);
					//Tên website
					let name = $(body).find("#ctl00_ContentPlaceHolder1_lblName");
					var nameText;
					name.each(function(i, e){
						nameText = $(this).text();
					});
					cus.push(nameText);
					
					//Địa chỉ tên miền
					let domain = $(body).find("#ctl00_ContentPlaceHolder1_lblDomain");
					var domainText;
					domain.each(function(i, e){
						domainText = $(this).text();
					});
					cus.push(domainText);

					//loại website
					let typeName = $(body).find("#ctl00_ContentPlaceHolder1_lblWebsiteTypeName");
					var typeNameText;
					typeName.each(function(i, e){
						typeNameText = $(this).text();
					});
					cus.push(typeNameText);

					//Người chịu trách nhiệm
					let representer = $(body).find("#ctl00_ContentPlaceHolder1_lblRepresenter");
					var representerText;
					representer.each(function(i, e){
						representerText = $(this).text();
					});
					cus.push(representerText);

					//Tên doanh nghiệp
					let companyName = $(body).find("#ctl00_ContentPlaceHolder1_lblCompanyName");
					var companyNameText;
					companyName.each(function(i, e){
						companyNameText = $(this).text();
					});
					cus.push(companyNameText);
					
					//MST/ĐKKD/QĐTL
					let companyTaxCode = $(body).find("#ctl00_ContentPlaceHolder1_lblCompanyTaxCode");
					var companyTaxCodeText;
					companyTaxCode.each(function(i, e){
						companyTaxCodeText = $(this).text();
					});
					cus.push(companyTaxCodeText);

					
					//Trụ sở doanh nghiệp
					let companyAddress = $(body).find("#ctl00_ContentPlaceHolder1_lblCompanyAddress");
					var companyAddressText;
					companyAddress.each(function(i, e){
						companyAddressText = $(this).text();
					});
					cus.push(companyAddressText);
					
					//Tỉnh/thành phố
					let departmentName = $(body).find("#ctl00_ContentPlaceHolder1_lblDepartmentName");
					var departmentNameText;
					departmentName.each(function(i, e){
						departmentNameText = $(this).text();
					});
					cus.push(departmentNameText);

					//Quốc gia
					let nationalName = $(body).find("#ctl00_ContentPlaceHolder1_lblNationalName");
					var nationalNameText;
					nationalName.each(function(i, e){
						nationalNameText = $(this).text();
					});
					cus.push(nationalNameText);

					//Điện thoại
					let companyPhone = $(body).find("#ctl00_ContentPlaceHolder1_lblCompanyPhone");
					var companyPhoneText;
					companyPhone.each(function(i, e){
						companyPhoneText = $(this).text();
					});
					cus.push(companyPhoneText);
					cus.push("-------------------------------");

				//console.log(arr);
				//	console.log(i, $('#ctl00_ContentPlaceHolder1_lblName').text());
					
				}
			}

		});
	}
	res.render('custom', {cus: cus})
});

var capp = [];
app.get('/customapp', function(req, res){


	for (let i = 9; i < 20; i ++){
		request("http://online.gov.vn/CustomAppDisplay.aspx?DocId=" + i , function (err, response, body) {
			if(err){
				console.log(err);
			} else{
				$ = cheerio.load(body);
				if(body.indexOf("reg-subtitle") == -1){
					console.log(i ,"Khong ton tai");
					
				}
				else {

					// id
					capp.push(i);
					//Tên ứng dụng
					let appName = $(body).find("#ctl00_ContentPlaceHolder1_lblName");
					var appNameText;
					appName.each(function(i, e){
						appNameText = $(this).text();
					});
					capp.push(appNameText);

					//Người chịu trách nhiệm
					let representer = $(body).find("#ctl00_ContentPlaceHolder1_lblRepresenter");
					var representerText;
					representer.each(function(i, e){
						representerText = $(this).text();
					});
					capp.push(representerText);
					//Tên doanh nghiệp
					let companyName = $(body).find("#ctl00_ContentPlaceHolder1_lblCompanyName");
					var companyNameText;
					companyName.each(function(i, e){
						companyNameText = $(this).text();
					});
					capp.push(companyNameText);
					
					//MST/ĐKKD/QĐTL
					let companyTaxCode = $(body).find("#ctl00_ContentPlaceHolder1_lblCompanyTaxCode");
					var companyTaxCodeText;
					companyTaxCode.each(function(i, e){
						companyTaxCodeText = $(this).text();
					});
					capp.push(companyTaxCodeText);

					
					//Trụ sở doanh nghiệp
					let companyAddress = $(body).find("#ctl00_ContentPlaceHolder1_lblCompanyAddress");
					var companyAddressText;
					companyAddress.each(function(i, e){
						companyAddressText = $(this).text();
					});
					capp.push(companyAddressText);
					
					//Tỉnh/thành phố
					let departmentName = $(body).find("#ctl00_ContentPlaceHolder1_lblDepartmentName");
					var departmentNameText;
					departmentName.each(function(i, e){
						departmentNameText = $(this).text();
					});
					capp.push(departmentNameText);

					//Quốc gia
					let nationalName = $(body).find("#ctl00_ContentPlaceHolder1_lblNationalName");
					var nationalNameText;
					nationalName.each(function(i, e){
						nationalNameText = $(this).text();
					});
					capp.push(nationalNameText);

					//Điện thoại
					let companyPhone = $(body).find("#ctl00_ContentPlaceHolder1_lblCompanyPhone");
					var companyPhoneText;
					companyPhone.each(function(i, e){
						companyPhoneText = $(this).text();
					});
					capp.push(companyPhoneText);
					capp.push("-------------------------------");

				//console.log(arr);
				//	console.log(i, $('#ctl00_ContentPlaceHolder1_lblName').text());
					
				}
			}

		});
	}
	res.render('customApp', {capp: capp})
});

var ad = [];
app.get('/app', function(req, res){


	for (let i = 9; i < 20; i ++){
		request("http://online.gov.vn/AppDisplay.aspx?DocId=" + i , function (err, response, body) {
			if(err){
				console.log(err);
			} else{
				$ = cheerio.load(body);
				if(body.indexOf("reg-subtitle") == -1){
					console.log(i ,"Khong ton tai");
					
				}
				else {

					// id
					ad.push(i);
					//Tên ứng dụng
					let appName = $(body).find("#ctl00_ContentPlaceHolder1_lblName");
					var appNameText;
					appName.each(function(i, e){
						appNameText = $(this).text();
					});
					ad.push(appNameText);

					//Loại ứng dụng
					let typeName = $(body).find("#ctl00_ContentPlaceHolder1_lblWebsiteTypeName");
					var typeNameText;
					typeName.each(function(i, e){
						typeNameText = $(this).text();
					});
					ad.push(typeNameText);

					//Người chịu trách nhiệm
					let representer = $(body).find("#ctl00_ContentPlaceHolder1_lblRepresenter");
					var representerText;
					representer.each(function(i, e){
						representerText = $(this).text();
					});
					ad.push(representerText);
					//Tên doanh nghiệp
					let companyName = $(body).find("#ctl00_ContentPlaceHolder1_lblCompanyName");
					var companyNameText;
					companyName.each(function(i, e){
						companyNameText = $(this).text();
					});
					ad.push(companyNameText);
					
					//MST/ĐKKD/QĐTL
					let companyTaxCode = $(body).find("#ctl00_ContentPlaceHolder1_lblCompanyTaxCode");
					var companyTaxCodeText;
					companyTaxCode.each(function(i, e){
						companyTaxCodeText = $(this).text();
					});
					ad.push(companyTaxCodeText);
					
					//Trụ sở doanh nghiệp
					let companyAddress = $(body).find("#ctl00_ContentPlaceHolder1_lblCompanyAddress");
					var companyAddressText;
					companyAddress.each(function(i, e){
						companyAddressText = $(this).text();
					});
					ad.push(companyAddressText);
					
					//Tỉnh/thành phố
					let departmentName = $(body).find("#ctl00_ContentPlaceHolder1_lblDepartmentName");
					var departmentNameText;
					departmentName.each(function(i, e){
						departmentNameText = $(this).text();
					});
					ad.push(departmentNameText);

					//Quốc gia
					let nationalName = $(body).find("#ctl00_ContentPlaceHolder1_lblNationalName");
					var nationalNameText;
					nationalName.each(function(i, e){
						nationalNameText = $(this).text();
					});
					ad.push(nationalNameText);

					//Điện thoại
					let companyPhone = $(body).find("#ctl00_ContentPlaceHolder1_lblCompanyPhone");
					var companyPhoneText;
					companyPhone.each(function(i, e){
						companyPhoneText = $(this).text();
					});
					ad.push(companyPhoneText);
					ad.push("-------------------------------");

				//console.log(arr);
				//	console.log(i, $('#ctl00_ContentPlaceHolder1_lblName').text());
					
				}
			}

		});
	}
	res.render('app', {ad: ad})
});
