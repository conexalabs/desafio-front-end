'use strict';

const e = React.createElement;
const domContainerLocalizador = document.querySelector('#container-localizador');

class Localizador extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="row no-gutters">
				<div class="col-12 no-gutters justify-content-center row-busca">
					<div class="container-busca">
						<h2 class="title fadeInDown"><i class="fas fa-building"></i>Localizador de Empresas</h2>
						<div id="btn-localizar"></div>
					</div>
				</div>
				<div class="col-12 no-gutters justify-content-center align-items-center row-resultado">
					<div id="carousel-conteudo" class="d-flex align-items-center justify-content-center"></div>
				</div>
			</div>
			
		);
	}
}

ReactDOM.render(e(Localizador), domContainerLocalizador);

const domContainerBusca = document.querySelector('#btn-localizar');
const domContainerResultados = document.querySelector('#carousel-conteudo');

class ButtonLocalizar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: '', empresa: '', error: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		$('#alert-error').removeClass( 'd-block' );
		$('#alert-error').addClass( 'd-none' );
		this.setState({value: mask(event.target.value)});
	}

	handleSubmit(event) {
		event.preventDefault();
		
		var cnpjNoMask = this.state.value.replace(/\D/g,'');
		
		if (!validarCNPJ(cnpjNoMask)) {
			$('#alert-error').removeClass( 'd-none' );
			$('#alert-error').addClass( 'd-block' );
			return;
		}
		
		var script = document.createElement('script');
		script.src = "https://www.receitaws.com.br/v1/cnpj/" + cnpjNoMask + "?callback=jsonpResponseCallback";

		document.getElementsByTagName('head')[0].appendChild(script);
	}

	render() {
		return (
		  <form onSubmit={this.handleSubmit}>
			<div class="form-row align-items-center justify-content-center">
				<div class="col-auto">
					<input class="form-control form-control-lg text-cnpj fadeInUp" maxLength='18' placeholder="CNPJ..." type="text" value={this.state.value} onChange={this.handleChange} />
				</div>
				<div class="col-auto">
					<input class="btn btn-lg btn-localizar slideLeft" type="submit" value="Localizar" />
				</div>
			</div>
			<div class="form-row align-items-center justify-content-center">
				<div id="alert-error" class="alert alert-danger alert-dismissible fade show d-none zoomIn" role="alert">
					<button type="button" class="close" data-dismiss="alert" aria-label="Fechar">
						<span aria-hidden="true">&times;</span>
					</button>
					CNPJ inválido.
				</div>
			</div>
		  </form>
		);
	}
}

ReactDOM.render(e(ButtonLocalizar), domContainerBusca);

class Resultados extends React.Component {
	constructor(props) {
		super(props);
		this.state = {semHistorico: true, empresas: [], loading: true};
	}

	componentDidMount() {
		this.state.loading = false;
	}
	
	openMap(data) {
		ReactDOM.render(<MapaEmpresa empresa = {{ data }} />, domContainerLocalizador);
	}
	
	render() {

		if (localStorage.hasOwnProperty("empresas")) {
			this.state.empresas = JSON.parse(localStorage.getItem("empresas"))
		}
		
		if (this.state.empresas.length > 0) {
			this.state.semHistorico = false;
		}
		
		if (this.state.semHistorico) {
			return (<div class="text-center fadeInUp"><img src="img/localizar.png" class="image-resultados" />
					<div><p class="label-localizar">Localize acima a primeira empresa</p></div></div>);
		}
		
		
		else if (this.state.empresas.length > 0) {
			return (
			<div class="container-fluid">
				<div id="carouselEmpresas" class="carousel slide" data-ride="carousel">
				  <div class="carousel-inner row w-100 mx-auto flex-nowrap" role="listbox">
						
						{this.state.empresas.map(function(empresa, index) {
							
						  if (index == 0) {
							  return <div class="carousel-item col-sm-6 col-lg-3 active">
									<div class="card-empresa" onClick={() => this.openMap(empresa)}>
										<div class="info-card text-truncate" data-toggle="tooltip" data-placement="top" title={capitalize(empresa.nome)}>{capitalize(empresa.nome)}</div>
										<div class="title-card">Razão Social</div>
										<br />
										<div class="info-card">{empresa.cnpj}</div>
										<div class="title-card">CNPJ</div>
										<br />
										<div class="info-card text-truncate" data-toggle="tooltip" data-placement="top" title={capitalize(empresa.logradouro + " " + empresa.numero + " " + empresa.bairro + " " + empresa.municipio)}>{capitalize(empresa.logradouro + " " + empresa.numero + " " + empresa.bairro + " " + empresa.municipio)}</div>
										<div class="title-card">Endereço</div>
									</div>
								</div>;
						  } else {
							  return <div class="carousel-item col-sm-6 col-lg-3">
									<div class="card-empresa" onClick={() => this.openMap(empresa)}>
										<div class="info-card text-truncate" data-toggle="tooltip" data-placement="top" title={capitalize(empresa.nome)}>{capitalize(empresa.nome)}</div>
										<div class="title-card">Razão Social</div>
										<br />
										<div class="info-card">{empresa.cnpj}</div>
										<div class="title-card">CNPJ</div>
										<br />
										<div class="info-card text-truncate" data-toggle="tooltip" data-placement="top" title={capitalize(empresa.logradouro + " " + empresa.numero + " " + empresa.bairro + " " + empresa.municipio)}>{capitalize(empresa.logradouro + " " + empresa.numero + " " + empresa.bairro + " " + empresa.municipio)}</div>
										<div class="title-card">Endereço</div>
									</div>
								</div>;
						  }
						}, this)}
						
				  </div>
				  <a class="carousel-control-prev" href="#carouselEmpresas" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Anterior</span>
				  </a>
				  <a class="carousel-control-next" href="#carouselEmpresas" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Próximo</span>
				  </a>
				</div>
			</div>
			);
		}
		 
	}
}


ReactDOM.render(e(Resultados), domContainerResultados);

class MapaEmpresa extends React.Component {
	constructor(props) {
		super(props);
		this.state = {url: encodeURI("https://www.google.com/maps/embed/v1/search?key=AIzaSyCN24bho0wnvyr4PZ79eciT21M2Wk5wcT4&q=" 
		+ this.props.empresa.data.nome)};
	}

	openLocalizador() {
		window.location.reload();
	}
	
	render() {
		var empresa = this.props.empresa.data;
		return (
			<div class="google-maps">
			  <div class="card-map rotateInDownLeft">
				<div class="icon-map-voltar" onClick={this.openLocalizador}><i class="fas fa-arrow-circle-left"></i></div>
				<div class="info-card text-truncate" data-toggle="tooltip" data-placement="top" title={capitalize(empresa.nome)}>{capitalize(empresa.nome)}</div>
				<div class="title-card">Razão Social</div>
				<br />
				<div class="info-card">{empresa.cnpj}</div>
				<div class="title-card">CNPJ</div>
				<br />
				<div class="info-card text-truncate" data-toggle="tooltip" data-placement="top" title={capitalize(empresa.logradouro + " " + empresa.numero + " " + empresa.bairro + " " + empresa.municipio)}>{capitalize(empresa.logradouro + " " + empresa.numero + " " + empresa.bairro + " " + empresa.municipio)}</div>
				<div class="title-card">Endereço</div>
			  </div>
			  <iframe
				  frameBorder="0" style={{border: 0}}
				  src={this.state.url} allowFullScreen>
				</iframe>
			</div>
		);
	}
}

function renderComponentsLocalizador() {
	ReactDOM.render(<ButtonLocalizar />, domContainerBusca);
	ReactDOM.render(<Resultados />, domContainerResultados);
}

function jsonpResponseCallback(data) {
	if (data.status == 'ERROR') {
		alert(data.message);
	}
	else {
		var empresas = new Array()
		
		if (localStorage.hasOwnProperty("empresas")) {
			empresas = JSON.parse(localStorage.getItem("empresas"));
		}
		
		var index = empresas.findIndex(x => x.cnpj == data.cnpj)

		if (index === -1){
			empresas.push(data);
		}

		localStorage.setItem("empresas", JSON.stringify(empresas));
		
		ReactDOM.render(<MapaEmpresa empresa = {{ data }} />, domContainerLocalizador);
	}
}

$(document).ready(function() {
	
	var idx = $('#carouselEmpresas').index();
	var itemsPerSlide = 4;
	if (!window.matchMedia("(min-width: 992px)").matches) {
		itemsPerSlide = 2;
	}
	
	var totalItems = $('.carousel-item').length;
	
	if (totalItems <= itemsPerSlide) {
		$('.carousel-control-next').hide();
		$('.carousel-control-prev').hide();
	} else {
		$('.carousel-control-next').show();
		$('.carousel-control-prev').show();
	}
	
	$('#carouselEmpresas').on('slide.bs.carousel', function (e) {
		var itemsPerSlide = 4;
		
		if (!window.matchMedia("(min-width: 992px)").matches) {
			itemsPerSlide = 2;
		}
		
		var $e = $(e.relatedTarget);
		var idx = $e.index();
		var totalItems = $('.carousel-item').length;
		
		if (totalItems <= itemsPerSlide) {
			e.preventDefault();
			return;
		}
		
		if (idx >= totalItems-(itemsPerSlide-1)) {
			var it = itemsPerSlide - (totalItems - idx);
			for (var i=0; i<it; i++) {
				// append slides to end
				if (e.direction=="left") {
					$('.carousel-item').eq(i).appendTo('.carousel-inner');
				}
				else {
					$('.carousel-item').eq(0).appendTo('.carousel-inner');
				}
			}
		}
	});
	
	$('.alert').on('close.bs.alert', function (event) {
		event.preventDefault();
		$(this).fadeOut("slow");
	});
	
	$('.place-card.place-card-large').hide();
});


