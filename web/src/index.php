<?php
	include "scripts_utils.php";
	$scriptsLocation = ".";
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>AlgoView.js</title>

		<link href="lib/extjs/extjs-4.1.0/resources/css/ext-all.css" rel="stylesheet" type="text/css" />
		<link href='style/algoview.css' rel="stylesheet" type="text/css" />
	</head>

	<body>
    	<div id="loading-mask" />
    	<div id="loading">
    	    <div class="loading-indicator">
				<center>
<img src="data:image/gif;base64,R0lGODlhIAAgAOfeABZhpxhiqBpjqRxkqh5lqyBmrBFrsCJnrRRssSRorhZtsiVprydqsCltrStu
rixury5vsC9wsTBxsjJyszNztDV0tjZ1tzd2uDZ3sjh5tDp6tUR4tDt7tjx8uD59uT9+ukB/u0GA
vEOBvUSCvk6Duk+Eu1CFvFGGvVKHvlSJwFaKwXSQMHqPMFeLwnuQMViMw3yRMlmNxF+MvmCNv1mQ
wWGOwGKPwVuSw1yTxGSRw12UxWWSxF+VxmCWx2iVx2GXyGKYyoWcQ2iYxIadRGmZxYeeRWqaxoif
RoefTGubx4igTW2cyImhTm6dyW+eynGgzXKiznOjz3Sk0Huky3ylzH2mzX6nz3+p0ICq0YGr0oKs
04Ot1KKwbJ2ybIWv1ouw0oyx042y1KW1do6z1aa2d4+01qe3eJC116i4eZG22Km5epO32aq6e5S4
2pW525m51pq616y+hZu72K6/hpy82bO+hrS/h56+27XAiJ+/3LbBiaDA3bXCkLfDkaLC3qPD4LjF
kqTE4bnGk6XF4rrHlKbG47vIlarG3bzJlqvH3rvKnazI363J4K7K4a/L47DM5MXNorHN5bjM5bPO
5rnN5rTP57fP4bjQ4rvP6LrR48jTrbvS5MHR5MLS5sPT573V58zXscTU6M3YssXV6b/X6cfW6sjX
68nY7NTavMrZ7c3Z59Xbvc/b6tDd69Le7NPf7dTg7tXh79bi8Nfj8djk89nl9N3l7t7m79/n8ODp
8eHq8uLr8+Ps9OTt9eru3ejv5OXu9+vv3unw5ezw3+fv+Ovx5ujw+enx+vLx6Ozz5/Py6erz++30
6e7z9u/19/D2+PL3+fP4+/b49PT5/PX6/fb7/vn7+Pr8+ff9//v9+vj+//n///z/+/7//P//////
////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEA
AAAh/hFDcmVhdGVkIHdpdGggR0lNUAAh+QQJCgD/ACwAAAAAIAAgAEAI/gD/dRtIsKDBgwgTUgLA
sKGAJaWmDezlx0PDhgqmFdQ24CKARgkTovBIxeCyAgDODOyzoqVLl0WKdcMGBICUkAOXESvYyGMF
YwV7acMZq+EdnAU/MDQR8gnDAcYKZuOyIkgwg2MYCkiFE5SLl2DDrmDCDGnCOw0HNBvItq1btq4E
eJxLlyGJt21vNBTxDC/bTAIaZnpr68eBhkv84oV2EQQdtks8jlGMN4LHUm9RNNQ1kA3YIcMGnmnY
SHGWMQMhiQ2rpNhAKcT8StNTx44dPHr09NnNWxAhQoYMIUKkCBVlv9W2qKBB6bjztiku+nnulhEB
AE5CZSJC98EaVpNMrAAIYUyxlboMERxAD2CWYgsXNczyC2fARS+UPzBUQMw5nIZ3+EWMBwwpUA11
hzS0hlsgeCQHdQNt4NEgAyXgUSIQdmOCR1gMpE0mNjQUw1vWmOHLW7s0VEAVsbzVDAEMTdGWGC4N
EQxbzjzAkBGUqcDQGQPVIVYRxXRTDQ8MZaJYGACUMRAiq7l0RDHdaNNEAc/4Rc1AmrAQJVhKIHNc
N6vA8OVqTCgz5prHBQQAIfkECQoA/wAsAAAAACAAIABACP4A/3UbSLCgwYMIEw4kAaAhAAFGQkUb
2CtPB4cYAbgqWCJjI4UIUWCU4azgDYdlBvZZwbJlyyLFumETcgjkQFgWAHyQ1U0bpwkZTdkceKrM
BYd3hg780HCAwjUNBxgrmI3LiiDBDI7JiKIaQlEuXIodu4IJM6UJlzhUgZbgp4xwMT4YU+mLhhfN
FMpyGMIZyEwCMBIxKCLjkrbQHL5B2MhhmbbdImQcY7AHRl0D2YgdUmzgmYYCXCV8ZmHMQEhkxyop
NlSanjp27ODRo6eP7duCCBEyZAgRIkWoIBd0VsXIGmfCB1Z7ha3grQEOB2CDvKwBxgkL4nY41vYZ
gbgADJkUAN/wBcgODjXISvhGAFxYCKONaKig11A3GHUZdJNRATW0hzhEjEEQZCQHZBs0lMAnBfUC
BEaJQGZCRmsY1EJDMxx0DRq+HLQLXJMYlIdDUxRERktD/EKQMw809IAfxhxkCkZnDDQHWUUU0001
NwBghEJaNDTGQIik1tIRxXSjDS8gPTOQJi4YKZYSyAy1CgxSpsaEMsklFxAAIfkECQoA/wAsAAAA
ACAAIABACP4A/3UbSLCgwYMIExK8AKChACOhonXT1itPh4YYMa4xSM0GxkYKEaJo6OEgp4xlBvZZ
wbJlyyLFumEDUy0kQSkYBVjJ1GhJRgAxbDb6CeCOTYIfMC7QddCYgIYDjBXMxmVFkGAGxxDlhVCU
C5dgw65gwuwoQWrRDuZo2OCU2YI3iMoFoOUotl5fMIZwFjKTAKKsCDb5ueRtN2gY6SSc0LCM4W4T
MnaI1q3yGqK6KrMBO6RY5TMYF5joQauyaW20olWGJDaskmKmY8uWpqeOHTt49Ojpw7u3IEKEDBlC
hEgRKtnIk8em1ojTNOXQu2kDk+BApdh+Mv6InlzD3J8RsKxxl91EroECRHmYcnXnkDboazBqkJVc
2xoBRBdAM42Nxk8FvYznxk8aUGPaEz8pQM14lR2CURWy4aIBRgDIwaBpGzT0RXK8YJTIhZWZgJET
1CCnQUMzIHcNGr4gtwuFDalimjY2UDhFbGS0NMQvpjnzAIwhxOYEjGdUNodYRRTTTTU3AMADNMoB
AYAAZVSGSGstHVEMiN1o4gKWYCmBzHirwABma0wow+WapgUEACH5BAkKAP8ALAAAAAAgACAAQAj+
AP91G0iwoMGDCBMSjAKgoYAlpagNJObnQ8OGKmxpa1btILWLjRQiRNFwykFYKVrYWHBmYJ8VMGPG
LFKsG7YsmXjhqiaym5yLAAQskTMmBFAAsRSmOgogT0+CH46OIIitBtABxgpm67IiiC+DY46mSAjK
hcyzaFcoYfaUILQ1NxgZrMbjwQ9abQu6YcoXACeRWpiKeCaS0wCmVQramnBxSd5u0C4SyHUw1sUx
j7tFaJigV0FXfHUNVHN2yK+BZ5iuEQkpLVolxZ5K01PHDh48evT02b1bkCBChAwZQoRIEarMyJ/2
mnARE0FtSy4uaJbZT1+muh5rC8FUQQKmJaqUKdTmZ82aERc7zEooZwDTCcQIRjtw9AGxp3CYYiC4
TAFQBdXklQhQFuRiUCYXyZHZBg3dgJA2FyWSmQkN9XAQNi9cFMNB1pjhy0G7AKXBLgRxwpQUBYkR
0xDBEOTMA0eRQJA2Ghx1xkBzpFVEMd1UwwNQGkCTUDQDIeJaTEcUk5kmLBx5lhLFPIUKDE66xoQy
ySUXEAAh+QQJCgD/ACwAAAAAIAAgAEAI/gD/dRtIsKDBgwgRJhogAEMCABAFLClFbSAxPx8gQpxQ
LWG3WRobeUSIAuKAWR5fnBnYZ4XLly+LFOuGDYjGNSMJxtAIQACVTKG0DNBowiO2Fzzz5CT4gSfE
SQMvOB1grGC2LiuCBDM4RuMHbR5BuYBJtuwKJcyWFjyWAyKPg9CMqTV4x6ldjTc8nrEr4tnITQI0
2vAz6dhBCxCXzO0GzS6ngbAs8ByzuFsEiGsMzopgV9dANmSH/Bp4xi6xkZDMllVSbKk0PXXs4MGj
R0+f27cFCSJEyJAhRIgUoarcDZot4jmj8FxUkJQBADuOVdY24a7dCTmhUetGbYzdBgnumS7xSOyA
XQ2zEsIZoLFKQjlOHxBbCsfuBGoFiQmAqKDa3EJ2nWHQAxDJUdkGGj0wSUHRmKBRIpWZAFEPBn3g
VAwHWWOGLwftotEYBhlh1xQFifHSEMEQ5MwDPElhkDbU2MIDRGcMNIdZRRTTTTU88MQANQlFMxAi
qr10RDHdaOOFCVZoM5ImLBRJlhLFLIUKDFKqxoQyyCEXEAAh+QQJCgD/ACwAAAAAIAAgAEAI/gD/
dRtIsKDBgwgR+gDAsCEAAUtKTRvYy48HhwAqITylwWGjhAlRYJyEUMWZgX1WqFy5skixbtiANGwE
0qAKjE94dYumheGSajXpNLxTs+CHhinO0CKYiYDDAcYKZuOyIkgwg2MaPqsJygXLr2BXMGFW9OCp
hgJylUVYCYQRSZZ6YJzrkATIWQMcinhWM5MAhiZqamC4ZO1AaHP9DJyAcYzhgREYgoiW0ElDXQPZ
fB0ybOAZh43KQgoLVkmxgVG2JJSmp44dO3j06OlDu7YgQoQMGUKESBGqxwNDTSFCCXjRMA6NGKwl
y3g3P3QBPCDgsApIWQSiM0RwILoWkDfmlGqYlRDOgIZ+ajppqIBYWTgN14DcwlBBNcOHMB4gRlAb
loZyALcBRmEMpAFGiQBnQkMXNEJQCxjFcJA1Zvhy0C4NVXIQNKX80NAUBYmx0hDBEOTMAw1NA5Iz
BwBwxkB1hFVEMd1Uw0NDE0QDUikDIULaSkcU0402TTB0S02asPDjV0og04022oC0CgxLksaEMs45
FxAAOw==" width="32" height="32" />
			        <div id="loading-message">Loading AlgoView.js...</div>
				</center>
    	    </div>
    	</div>

		<script src="lib/antlr-javascript-runtime-3.1/antlr3-all-patched.js" type="text/javascript" charset="utf-8"></script>

		<!-- TODO: A supprimer après avoir corrigé le bug sur eve -->
		<script src="lib/raphael-2.1.1.js" type="text/javascript" charset="utf-8"></script>

		<?php
			include "algoview.php";

			generateScriptNodes();
		?>
	</body>
</html>
