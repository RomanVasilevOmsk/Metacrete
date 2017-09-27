<?

	$cpc_first=array(
        'object' => 'Сухие смеси для ремонта бетонных и железобетонных <span class="red">объектов и сооружений</span>',
        'contrs' => 'Сухие смеси для ремонта бетонных и железобетонных <span class="red">конструкций и объектов',
        'area' => 'Сухие смеси для ремонта бетонных и железобетонных <span class="red">поверхностей объектов',
        'fracture' => 'Сухие смеси для ремонта <span class="red">трещин</span> бетонных и железобетонных объектов',
        'inout' => 'Сухие смеси для ремонта бетона и железобетона <span class="red">внутри и снаружи помещений',
        'floor' => 'Сухие смеси для ремонта <span class="red">пола и потолков</span> бетонных и железобетонных объектов',
        'winter' => 'Сухие смеси для ремонта бетонных и железобетонных объектов <span class="red">зимой',
        'wall' => 'Сухие смеси для ремонта <span class="red">стен</span> бетонных и железобетонных объектов',
        'square' => 'Сухие смеси для ремонта <span class="red">площадей</span> бетонных и железобетонных объектов',
        'foundation' => 'Сухие смеси для ремонта <span class="red">фундаментов</span> бетонных и железобетонных объектов',
        'step' => 'Сухие смеси для ремонта <span class="red">ступеней лестниц</span> бетонных и железобетонных объектов',
        'chip' => 'Сухие смеси для ремонта <span class="red">сколов</span> бетонных и железобетонных объектов',
        'protect' => 'Сухие смеси для <span class="red">защиты</span> бетонных и железобетонных объектов',
        'bridge' => 'Сухие смеси для ремонта бетона и железобетона <span class="red">мостов</span> и других объектов',
		);



	
	function firstTitle()
	{
		global $cpc_first;
		if( isset($_GET['tema']) && array_key_exists(trim($_GET['tema']),$cpc_first) )
			return $cpc_first[trim($_GET['tema'])];
		elseif ( isset($_GET['tema']) && array_key_exists(trim(iconv('cp1251','utf-8',$_GET['tema'])),$cpc_first) )	
			return $cpc_first[trim(iconv('cp1251','utf-8',$_GET['tema']))];
		else
			return 'Metacrete - сухие ремонтные и подливочные смеси';
	}

    function timeUtm()
    {
        $now = new DateTime("now", new DateTimeZone('Europe/Moscow'));

        $morning = clone $now;
        $morning->setTime(6, 30);

        $evening = clone $now;
        $evening->setTime(15, 0);

        $isWeekend = $now->format('N') >= 6;
        if ($now >= $morning && $now < $evening && !$isWeekend) {
            return 'Перезвоним в течение 4 минут';
        } else {
            return 'Мы перезвоним Вам в рабочее время.';
        }


    }
	
?>