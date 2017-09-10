<div id="results" class="ui positive message">
		<div class="header">Your CSV file is ready</div>
</div>

<div id="ui form">
<form>

<div class="ui two column grid">
		<div class="column">
			<h1 class="ui header">EMS Patient Care Report</h1>
		</div>
		<div class="column">
			<button class="ui primary right floated button" ng-click="exportData()">Export fields to CSV</button>
			<button class="ui right floated button" ng-click="exportToExcel('#vitals')">Export table to CSV</button>
		</div>
</div>


<h2 class="ui top attached header">Demographics</h2>

<div class="ui attached segment four column grid">
		<div class="column">
			<fieldset>
				<span class="obs">Name:</span>
				<input type="text" id="1_1" ng-value="name[0].value">
			</fieldset>
		</div>
	
		<div class="column">
			<fieldset>
				<span class="obs">Age:</span>
				<input type="text" id="2_1" ng-value="age[0].value">
			</fieldset>
		</div>
	
		<div class="column">
			<fieldset>
				<span class="obs">Sex:</span>
				<input type="radio" name="sex" id="4_1" value="male" ng-model="sex">
				<label for="4_1">Male</label>
				<input type="radio" name="sex" id="4_2" value="female" ng-model="sex">
				<label for="4_2">Female</label>
			</fieldset>
		</div>

		<div class="column">
			<fieldset>
				<span class="obs">SSN:</span>
				<input type="text" id="3_1" ng-value="ssn[0].value">
			</fieldset>
		</div>
</div>

<h2 class="ui top attached header">Rapid Assessment</h2>

<div class="ui attached segment two column grid">
	<div class="column">
		<div class="ui divided items">
			<fieldset class="item">
				<span class="obs">CPR:</span>
				<input type="radio" name="cpr" id="5_1" value="yes" ng-model="cpr">
				<label for="5_1">Yes</label>
				<input type="radio" name="cpr" id="5_2" value="no" ng-model="cpr">
				<label for="5_2">No</label>
			</fieldset>

			<fieldset class="item">
				<span class="obs">Airway:</span>
				<input type="radio" name="airway" id="6_1" value="yes" ng-model="airway">
				<label for="6_1">Yes</label>
				<input type="radio" name="airway" id="6_2" value="no" ng-model="airway">
				<label for="6_2">No</label>
			</fieldset>

			<fieldset class="item">
				<span class="obs">LOC:</span>
				<input type="radio" name="loc" id="7_1" value="alert" ng-model="conscious">
				<label for="7_1">Alert</label>
				<input type="radio" name="loc" id="7_2" value="verbal" ng-model="conscious">
				<label for="7_2">Verbal</label>
				<input type="radio" name="loc" id="7_3" value="pain" ng-model="conscious">
				<label for="7_3">Pain</label>
				<input type="radio" name="loc" id="7_4" value="unresponsive" ng-model="conscious">
				<label for="7_4">Unresponsive</label>
			</fieldset>
		</div>
	</div>

	<div class="column">
		<div class="ui divided items">
			<fieldset class="item">
				<span class="obs">Stroke scale:</span>
				<input type="radio" name="stroke" id="8_1" value="no" ng-model="strok">
				<label for="8_1">N/A</label>
				<input type="radio" name="stroke" id="8_2" value="facial drop" ng-model="strok">
				<label for="8_2">Facial drop</label>
				<input type="radio" name="stroke" id="8_3" value="arm drift" ng-model="strok">
				<label for="8_3">Arm drift</label>
				<input type="radio" name="stroke" id="8_4" value="speech impaired" ng-model="strok">
				<label for="8_4">Speech impaired</label>
			</fieldset>

			<fieldset class="item">
				<span class="obs">Pupils:</span>
				<input type="radio" name="pupils" id="9_1" value="normal" ng-model="pup">
				<label for="9_1">Normal</label>
				<input type="radio" name="pupils" id="9_2" value="constricted" ng-model="pup">
				<label for="9_2">Constricted</label>
				<input type="radio" name="pupils" id="9_3" value="dilated" ng-model="pup">
				<label for="9_3">Dilated</label>
				<input type="radio" name="pupils" id="9_4" value="no reaction" ng-model="pup">
				<label for="9_4">No reaction</label>
			</fieldset>

			<fieldset class="item">
				<span class="obs">Injury:</span>
				<input type="radio" name="injury" id="10_1" value="no" ng-model="injury">
				<label for="10_1">None</label>
				<input type="radio" name="injury" id="10_2" value="blunt" ng-model="injury">
				<label for="10_2">Blunt</label>
				<input type="radio" name="injury" id="10_3" value="penetrating" ng-model="injury">
				<label for="10_3">Penetrating</label>
				<input type="radio" name="injury" id="10_4" value="burn" ng-model="injury">
				<label for="10_4">Burn</label>
			</fieldset>
		</div>
	</div>

</div>

<div class="ui one column grid container">
	<div class="column">
		<table id="vitals" class="ui celled padded table">
				<thead>
					<th width="25%">Date/Time</th>
					<th width="18%">BP</th>
					<th width="18%">Pulse</th>
					<th width="18%">Respiratory Rate</th>
					<th width="18%">Oximetry (%)</th>
				</thead>
				<tr ng-repeat="item in vitals">
					<td>{{item.date | date:'medium'}}</td>
					<td ng-class="{'error': (item.bps-0) > 139, 'warning': (item.bps-0) < 99 && (item.bps-0) != 0}"><i ng-class="{'arrow up icon': (item.bps-0) > 139, 'arrow down icon': (item.bps-0) < 99 && (item.bps-0) != 0}"></i>{{!item.bps ? "" : (item.bps + " / " + item.bpd)}}</td>
					<td ng-class="{'error': (item.pr-0) > 100, 'warning': (item.pr-0) < 50 && (item.pr-0) != 0}"><i ng-class="{'arrow up icon': (item.pr-0) > 100, 'arrow down icon': (item.pr-0) < 50 && (item.pr-0) != 0}"></i>{{item.pr}}</td>
					<td ng-class="{'error': (item.rr-0) > 20, 'warning': (item.rr-0) < 12 && (item.rr-0) != 0}"><i ng-class="{'arrow up icon': (item.rr-0) > 20, 'arrow down icon': (item.rr-0) < 12 && (item.rr-0) != 0}"></i>{{item.rr}}</td>
					<td ng-class="{'warning': (item.ox-0) < 82 && (item.ox-0) != 0}"><i ng-class="{'arrow down icon': (item.ox-0) < 82 && (item.ox-0) != 0}"></i>{{item.ox}}</td>
				</tr>
			</table>
	</div>
</div>

<h2 class="ui top attached header">History & Treatment</h2>

<div class="ui attached segment two column grid">
	<div class="row">
		<div class="three wide column">
			<span class="obs">Past Medical History:</span>
		</div>
		<div>
			<textarea id="11_1" rows="3" cols="160" ng-model="histjoin"></textarea>
		</div>
	</div>

	<div class="row">
		<div class="three wide column">
			<span class="obs">Medications:</span>
		</div>
		<div>
			<textarea id="12_1" rows="3" cols="160" ng-model="medjoin"></textarea>
		</div>
	</div>

	<div class="row">
		<div class="three wide column">
			<span class="obs">Allergies:</span>
		</div>
		<div>
			<textarea id="13_1" rows="3" cols="160" ng-model="allergyjoin"></textarea>
		</div>
	</div>

	<div class="row">
		<div class="three wide column">
			<span class="obs">Treatment:</span>
		</div>
		<div>
			<textarea id="14_1" rows="3" cols="160" ng-model="treatjoin"></textarea>
		</div>
	</div>

</div>

</form>

</div>
