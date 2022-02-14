<?php
if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
  'key' => 'group_5f02dd67b33c3',
  'title' => '官網前台設定',
  'fields' => array(
    array(
      'key' => 'field_60f90ff549292',
      'label' => 'Season 1',
      'name' => '',
      'type' => 'accordion',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'show_in_rest' => 0,
      'open' => 0,
      'multi_expand' => 0,
      'endpoint' => 0,
    ),
    array(
      'key' => 'field_60f00c9fef83f',
      'label' => 'Season 1',
      'name' => 'season1',
      'type' => 'group',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'show_in_rest' => 1,
      'layout' => 'block',
      'sub_fields' => array(
        array(
          'key' => 'field_5f02dd765bc88',
          'label' => '賽道記錄',
          'name' => 'track_record',
          'type' => 'repeater',
          'instructions' => '',
          'required' => 0,
          'conditional_logic' => 0,
          'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
          ),
          'show_in_rest' => 1,
          'collapsed' => 'field_5f02ef735bc89',
          'min' => 0,
          'max' => 0,
          'layout' => 'table',
          'button_label' => '',
          'sub_fields' => array(
            array(
              'key' => 'field_5f02ef735bc89',
              'label' => '賽道',
              'name' => 'id',
              'type' => 'select',
              'instructions' => '',
              'required' => 0,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'choices' => array(
                'abyss_R02' => '深海 崎嶇海峽',
                'god_R02' => '神域 諸神世界',
                'sword_R01' => '刀劍 雲中峽谷',
                'nemo_R01' => '積木樂園 聖誕老人的秘密基地',
                'forest_R05' => '森林 恐怖空中吊橋',
                'pirate_R01' => '海盜 懸崖上的決鬥',
                'ice_R02' => '冰河 破碎的冰山',
                'village_R12' => '城鎮 城鎮南山',
                'world_R10' => '世界 杜拜的市中心',
                'castle_R01' => '城堡 隱藏的密室',
                'jurassic_R04' => '侏儸紀 恐龍墳墓',
                'fairy_R03' => '童話 魔女之城',
                'beach_R01' => '海濱 大道',
                'brodi_R01' => '布羅帝 秘密的研究所',
                'china_R01' => '中華主題 兵馬俑陵寢',
                'wkc_R07' => 'WKC 日本 F1 賽道',
              ),
              'default_value' => false,
              'allow_null' => 0,
              'multiple' => 0,
              'ui' => 0,
              'return_format' => 'value',
              'ajax' => 0,
              'placeholder' => '',
            ),
            array(
              'key' => 'field_5f02f05db3148',
              'label' => '最佳記錄',
              'name' => 'time',
              'type' => 'text',
              'instructions' => '',
              'required' => 1,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'default_value' => '0\'00"000',
              'placeholder' => '',
              'prepend' => '',
              'append' => '',
              'maxlength' => '',
            ),
            array(
              'key' => 'field_5f02f09bb3149',
              'label' => '記錄保持人',
              'name' => 'player',
              'type' => 'text',
              'instructions' => '',
              'required' => 1,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'default_value' => '-',
              'placeholder' => '',
              'prepend' => '',
              'append' => '',
              'maxlength' => '',
            ),
          ),
        ),
        array(
          'key' => 'field_5f03e794b0f40',
          'label' => '首頁精華影片',
          'name' => 'highlight',
          'type' => 'group',
          'instructions' => '',
          'required' => 0,
          'conditional_logic' => 0,
          'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
          ),
          'show_in_rest' => 1,
          'layout' => 'row',
          'sub_fields' => array(
            array(
              'key' => 'field_5f043acd83392',
              'label' => '影片敘述',
              'name' => 'video_description',
              'type' => 'textarea',
              'instructions' => '',
              'required' => 1,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'default_value' => '',
              'placeholder' => '',
              'maxlength' => '',
              'rows' => 5,
              'new_lines' => '',
            ),
            array(
              'key' => 'field_5f04111ea4c0f',
              'label' => '播放清單 ID',
              'name' => 'playlist_id',
              'type' => 'text',
              'instructions' => '',
              'required' => 0,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'default_value' => '',
              'placeholder' => '',
              'prepend' => '',
              'append' => '',
              'maxlength' => '',
            ),
            array(
              'key' => 'field_5f041552a4c10',
              'label' => '影片 ID',
              'name' => 'video_id',
              'type' => 'text',
              'instructions' => '',
              'required' => 1,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'default_value' => '',
              'placeholder' => '',
              'prepend' => '',
              'append' => '',
              'maxlength' => '',
            ),
            array(
              'key' => 'field_5f0d509ead8df',
              'label' => '重覆播放',
              'name' => 'loop',
              'type' => 'true_false',
              'instructions' => '',
              'required' => 0,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'message' => '',
              'default_value' => 0,
              'ui' => 1,
              'ui_on_text' => '',
              'ui_off_text' => '',
            ),
          ),
        ),
      ),
    ),
    array(
      'key' => 'field_60f9106551606',
      'label' => 'Season 2',
      'name' => '',
      'type' => 'accordion',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'show_in_rest' => 0,
      'open' => 0,
      'multi_expand' => 0,
      'endpoint' => 0,
    ),
    array(
      'key' => 'field_60f0511110cce',
      'label' => 'Season 2',
      'name' => 'season2',
      'type' => 'group',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'show_in_rest' => 1,
      'layout' => 'block',
      'sub_fields' => array(
        array(
          'key' => 'field_60f00d0a60ab4',
          'label' => '賽道記錄',
          'name' => 'track_record',
          'type' => 'repeater',
          'instructions' => '',
          'required' => 0,
          'conditional_logic' => 0,
          'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
          ),
          'show_in_rest' => 1,
          'collapsed' => '',
          'min' => 0,
          'max' => 0,
          'layout' => 'table',
          'button_label' => '',
          'sub_fields' => array(
            array(
              'key' => 'field_60f04b6010ccb',
              'label' => '賽道',
              'name' => 'id',
              'type' => 'select',
              'instructions' => '',
              'required' => 0,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'choices' => array(
                'olympos_R02' => '奧林帕斯 宙斯城',
                'abyss_R02' => '深海 崎嶇海峽',
                'sword_R01' => '刀劍 雲中峽谷',
                'world_R10' => '世界 杜拜的市中心',
                'jurassic_R04' => '侏儸紀 恐龍墳墓',
                'beach_R01' => '海濱 大道',
                'china_R02' => '中華主題 中華胡同',
                'wkc_R01' => 'WKC 新加坡F1賽道',
                'nymph_R01' => '精靈 海底城的秘密',
                'fairy_R01' => '童話 奇幻世界之門',
                'gold_R02' => '黃金文明 危險機關',
                'northeu_R02' => '太空 戰鬥飛行場',
                'mine_R01' => '礦山 曲折滑坡',
                'tomb_R03' => '墓園 骷髏城大探險',
                'ice_R02' => '冰河 破碎的冰山',
                'village_R01' => '城鎮 高速公路',
              ),
              'default_value' => false,
              'allow_null' => 0,
              'multiple' => 0,
              'ui' => 0,
              'return_format' => 'value',
              'ajax' => 0,
              'placeholder' => '',
            ),
            array(
              'key' => 'field_60f04cb710ccc',
              'label' => '最佳記錄',
              'name' => 'time',
              'type' => 'text',
              'instructions' => '',
              'required' => 1,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'default_value' => '0\'00"000',
              'placeholder' => '',
              'prepend' => '',
              'append' => '',
              'maxlength' => '',
            ),
            array(
              'key' => 'field_60f04ce310ccd',
              'label' => '記錄保持人',
              'name' => 'player',
              'type' => 'text',
              'instructions' => '',
              'required' => 1,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'default_value' => '',
              'placeholder' => '',
              'prepend' => '',
              'append' => '',
              'maxlength' => '',
            ),
            array(
              'key' => 'field_60f05180fc880',
              'label' => '隸屬隊伍',
              'name' => 'team',
              'type' => 'text',
              'instructions' => '',
              'required' => 1,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'default_value' => '',
              'placeholder' => '',
              'prepend' => '',
              'append' => '',
              'maxlength' => '',
            ),
            array(
              'key' => 'field_60f0519ffc881',
              'label' => '記錄階段',
              'name' => 'stage',
              'type' => 'text',
              'instructions' => '',
              'required' => 1,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'default_value' => '',
              'placeholder' => '',
              'prepend' => '',
              'append' => '',
              'maxlength' => '',
            ),
          ),
        ),
        array(
          'key' => 'field_60f92050fd923',
          'label' => '賽道數據',
          'name' => 'track_stats',
          'type' => 'textarea',
          'instructions' => '',
          'required' => 0,
          'conditional_logic' => 0,
          'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
          ),
          'show_in_rest' => 1,
          'default_value' => '[]',
          'placeholder' => '',
          'maxlength' => '',
          'rows' => '',
          'new_lines' => '',
        ),
        array(
          'key' => 'field_60f93813fd924',
          'label' => '選手數據',
          'name' => 'player_stats',
          'type' => 'textarea',
          'instructions' => '',
          'required' => 0,
          'conditional_logic' => 0,
          'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
          ),
          'show_in_rest' => 1,
          'default_value' => '[]',
          'placeholder' => '',
          'maxlength' => '',
          'rows' => '',
          'new_lines' => '',
        ),
        array(
          'key' => 'field_6110a2f717d7a',
          'label' => '人氣王票選',
          'name' => 'vote',
          'type' => 'group',
          'instructions' => '',
          'required' => 0,
          'conditional_logic' => 0,
          'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
          ),
          'show_in_rest' => 1,
          'layout' => 'row',
          'sub_fields' => array(
            array(
              'key' => 'field_61166443bde1e',
              'label' => '維護模式',
              'name' => 'maintenance_mode',
              'type' => 'true_false',
              'instructions' => '暫停任何請求',
              'required' => 0,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 0,
              'message' => '',
              'default_value' => 0,
              'ui' => 1,
              'ui_on_text' => '',
              'ui_off_text' => '',
            ),
            array(
              'key' => 'field_6110a45417d7b',
              'label' => '開始時間',
              'name' => 'from_datetime',
              'type' => 'date_time_picker',
              'instructions' => '',
              'required' => 0,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'display_format' => 'Y-m-d H:i:s',
              'return_format' => 'Y/m/d H:i:s',
              'first_day' => 0,
            ),
            array(
              'key' => 'field_6110a48217d7c',
              'label' => '結束時間',
              'name' => 'to_datetime',
              'type' => 'date_time_picker',
              'instructions' => '',
              'required' => 0,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'display_format' => 'Y-m-d H:i:s',
              'return_format' => 'Y/m/d H:i:s',
              'first_day' => 0,
            ),
            array(
              'key' => 'field_61161a5ce588b',
              'label' => '最大請求次數',
              'name' => 'max_request',
              'type' => 'number',
              'instructions' => '',
              'required' => 0,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 0,
              'default_value' => '',
              'placeholder' => '',
              'prepend' => '',
              'append' => '',
              'min' => '',
              'max' => '',
              'step' => '',
            ),
            array(
              'key' => 'field_61161af1e588c',
              'label' => '最大嘗試次數',
              'name' => 'max_attempt',
              'type' => 'number',
              'instructions' => '',
              'required' => 0,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 0,
              'default_value' => '',
              'placeholder' => '',
              'prepend' => '',
              'append' => '',
              'min' => '',
              'max' => '',
              'step' => '',
            ),
          ),
        ),
      ),
    ),
    array(
      'key' => 'field_6209f4989cdca',
      'label' => 'Kart 15th',
      'name' => '',
      'type' => 'accordion',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'show_in_rest' => 0,
      'open' => 1,
      'multi_expand' => 0,
      'endpoint' => 0,
    ),
    array(
      'key' => 'field_6209f4bb9cdcb',
      'label' => 'Kart 15th',
      'name' => 'kart15th',
      'type' => 'group',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'show_in_rest' => 1,
      'layout' => 'block',
      'sub_fields' => array(
        array(
          'key' => 'field_6209f4bc9cdcc',
          'label' => '賽道記錄',
          'name' => 'track_record',
          'type' => 'repeater',
          'instructions' => '',
          'required' => 0,
          'conditional_logic' => 0,
          'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
          ),
          'show_in_rest' => 1,
          'collapsed' => '',
          'min' => 0,
          'max' => 0,
          'layout' => 'table',
          'button_label' => '',
          'sub_fields' => array(
            array(
              'key' => 'field_6209f4bc9cdcd',
              'label' => '賽道',
              'name' => 'id',
              'type' => 'select',
              'instructions' => '',
              'required' => 0,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'choices' => array(
                'korea_R01' => '韓國 繁華的首爾',
                'olympos_R01' => '奧林帕斯 空中神殿',
                'camelot_R01' => '史詩 城外巡查路',
                'abyss_R01' => '深海 龐克章魚',
                'god_R02' => '神域 諸神世界',
                'sword_R01' => '刀劍 雲中峽谷',
                'nemo_R01' => '積木樂園 聖誕老人的秘密基地',
                'jurassic_R04' => '侏儸紀 恐龍墳墓',
                'wkc_R05' => 'WKC 巴西 F1 賽道',
                'pirate_R04' => '海盜 鯊魚島的秘密',
                'castle_R01' => '城堡 隱藏的密室',
                'gold_R01' => '黃金文明 黃金座標',
                'factory_R01' => '工廠 未完成第5禁區',
                'northeu_R01' => '太空 蜿蜒跑道',
                'village_R07' => '城鎮 命運之橋',
                'forest_R02_rvs' => '[R] 森林 髮夾彎',
              ),
              'default_value' => false,
              'allow_null' => 0,
              'multiple' => 0,
              'ui' => 0,
              'return_format' => 'value',
              'ajax' => 0,
              'placeholder' => '',
            ),
            array(
              'key' => 'field_6209f4bc9cdce',
              'label' => '最佳記錄',
              'name' => 'time',
              'type' => 'text',
              'instructions' => '',
              'required' => 1,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'default_value' => '0\'00"000',
              'placeholder' => '',
              'prepend' => '',
              'append' => '',
              'maxlength' => '',
            ),
            array(
              'key' => 'field_6209f4bc9cdcf',
              'label' => '記錄保持人',
              'name' => 'player',
              'type' => 'text',
              'instructions' => '',
              'required' => 1,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'default_value' => '',
              'placeholder' => '',
              'prepend' => '',
              'append' => '',
              'maxlength' => '',
            ),
            array(
              'key' => 'field_6209f4bc9cdd1',
              'label' => '記錄階段',
              'name' => 'stage',
              'type' => 'text',
              'instructions' => '',
              'required' => 1,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'show_in_rest' => 1,
              'default_value' => '',
              'placeholder' => '',
              'prepend' => '',
              'append' => '',
              'maxlength' => '',
            ),
          ),
        ),
        array(
          'key' => 'field_6209f4bc9cdd3',
          'label' => '選手數據',
          'name' => 'player_stats',
          'type' => 'textarea',
          'instructions' => '',
          'required' => 0,
          'conditional_logic' => 0,
          'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
          ),
          'show_in_rest' => 1,
          'default_value' => '[]',
          'placeholder' => '',
          'maxlength' => '',
          'rows' => '',
          'new_lines' => '',
        ),
      ),
    ),
  ),
  'location' => array(
    array(
      array(
        'param' => 'options_page',
        'operator' => '==',
        'value' => 'rsl-fe-config',
      ),
    ),
  ),
  'menu_order' => 0,
  'position' => 'normal',
  'style' => 'default',
  'label_placement' => 'left',
  'instruction_placement' => 'label',
  'hide_on_screen' => '',
  'active' => true,
  'description' => '',
  'show_in_rest' => 1,
));

endif;
