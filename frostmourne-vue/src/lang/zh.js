import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang

export default {
  ...elementZhLocale,
  buttons: {
    search: '查询',
    add: '添加',
    run: '运行',
    onceRun: '执行一次',
    export: '导出',
    edit: '编辑',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定',
    save: '保存',
    test: '测试',
    save_another: '另存',
    view: '查看'
  },
  route: {
    Dashboard: '首页',
    AlarmManager: '监控管理',
    DataQuery: '数据查询',
    DataManager: '数据管理',
    AccountManager: '账号管理',
    AlarmList: '监控列表',
    AlarmEdit: '监控编辑',
    ExecuteLog: '执行日志',
    MyMessage: '我的消息',
    MessageTemplate: '消息模板',
    Service: '服务信息',
    DataSource: '数据源',
    DataName: '数据名',
    Account: '账号信息',
    Team: '团队信息',
    Department: '部门信息'
  },
  login: {
    title: 'Frostmourne监控平台'
  },
  alarm: {
    list: {
      add: '添加报警',

      input_id: '输入id',
      input_name: '输入名称,支持模糊查询',
      input_status: '监控状态',
      input_service: '请选择服务',
      input_status_open: '开启',
      input_status_close: '关闭',

      header_alarm_name: '监控名称',
      header_alarm_type: '监控类型',
      header_is_open: '是否开启',
      header_last_execute_result: '最后执行结果',
      header_last_execute_time: '最后执行时间',
      header_next_trigger_time: '下次触发时间',
      header_owner_object: '所属对象',
      header_modifier: '最后修改人',
      header_last_modify_time: '最后修改时间',
      header_action: '操作'
    },
    edit: {
      label_basic: '基础信息',
      label_alarm_name: '监控名称',
      label_status_open: '开启',
      label_status_close: '关闭',
      label_service: '所属服务',
      label_risk: '风险等级',
      label_info: '提示',
      label_important: '重要',
      label_emergency: '紧急',
      label_crash: '我崩了',
      label_owner: '所属对象',
      label_owner_placeholder: '表示这个监控的归属对象标识',
      label_team: '团队',
      label_team_placeholder: '选择团队',
      label_description: '描述',
      label_data_config: '数据配置',
      label_data: '数据',
      label_aggregation_type: '聚合类型',
      label_pecentile: '百分比',
      label_percentile_placeholder: '例如: 90',
      label_aggregation_field: '聚合字段',
      label_bucket_type: '分桶类型',
      label_bucket_field: '分桶字段',
      label_time_interval: '时间统计间隔',
      label_hour: '小时',
      label_day: '天',
      label_minute: '分钟',
      label_half_hour: '30分钟',
      label_five_minute: '5分钟',
      label_week: '周',
      label_query: '查询语句',
      label_http_header: 'HTTP头',
      label_post_data: 'POST数据',
      label_alarm_rule: '报警规则',
      label_judge_type: '判断类型',
      label_number_compare: '数值比较',
      label_javascript_expression: 'Javascript表达式',
      label_ring_compare: '环比',
      label_same_time_compare: '同比',
      label_bucket_number_compare: '分桶数值比较',
      label_recent: '最近',
      label_judge_rule: '判断规则',
      label_compare_operation: '比较类型',
      label_threshold: '阈值',
      label_expression: '判断表达式',
      label_increase: '增加',
      label_decrease: '减少',
      label_increase_or_decrease: '增加或减少',
      label_absolute: '绝对值',
      label_yesterday: '昨天',
      label_last_week: '上周',
      label_last_month: '上月',
      label_yesterday_and_last_week: '昨天和上周',
      label_alert_condition: '报警条件',
      label_message_template: '消息模板',
      label_message_type: '消息类型',
      label_custom_link: '自定义链接',
      label_template_content: '模板内容',
      label_message_deliver: '报警发送',
      label_message_way: '报警方式',
      label_recover_notice: '恢复通知',
      label_dingtalk_robot: '钉钉机器人',
      label_wechat_robot: '微信机器人',
      label_http_addr: 'HTTP地址',
      label_feishu_robot: '飞书机器人',
      label_silence_time: '静默时间',
      label_silence_rule: '静默判断',
      label_message_receiver: '报警接收人',
      label_alarm_upgrade: '报警升级',
      label_alarm_upgrade_switch: '升级开关',
      label_upgrade_rule: '升级规则',
      label_schedule_config: '调度配置',
      label_every: '每隔',
      label_each_day: '每天',
      label_cron_expression: 'cron表达式',

      text_minutes_metric_value: '分钟内，指标数值',
      text_greater_percent: '超过百分之',
      text_and_diff: '并且差值(当前值 - 对比值)',
      text_continuous: '连续',
      text_times_meet_rule_begin_alert: '次满足规则时开始报警',
      text_import_template: '导入模板',
      text_preview_data: '预览数据',
      text_dingding: '钉钉',
      text_feishu: '飞书',
      text_wechat: '企业微信',
      text_sms: '短信',
      text_continuous_alert: '持续报警',
      text_times_then_upgrade: '次时升级',
      text_or: '或者',
      text_clock: '点',
      text_silence_rule: '静默判断',
      text_choose_service: '选择服务',

      input_service: '请选择服务',

      title_response_data: '响应数据'
    },
    alarmLog: {
      label_alarm_id: '监控id',
      label_execute_time: '执行时间',
      label_start_date: '开始日期',
      label_end_date: '结束日期',
      label_is_alert: '是否报警',
      label_all: '全部',
      label_yes: '是',
      label_no: '否',
      label_execute_result: '执行结果',
      label_success: '成功',
      label_exception: '异常',
      label_alert_condition: '规则判断',
      label_meet: '满足',
      label_not_meet: '未满足',
      label_cost_millisecond: '耗时(毫秒)',
      label_action: '操作',

      text_detail_arrow: '详细>>',
      text_today: '今天',
      text_yesterday: '昨天',
      text_the_day_before_yesterday: '前天',
      text_latest_three_days: '最近三天',
      text_latest_seven_days: '最近一周',
      text_latest_30_days: '最近30天'
    }
  },
  dashboard: {
    latest_30_day_alert_count: '最近30天报警次数',
    latest_30_day_message_count: '最近30天消息数',
    alarm_count: '监控数量',
    schedule_count: '调度次数',
    alert_count: '报警次数',
    message_count: '消息数量'
  }
}
