package routers

import (
	"likeadmin/admin/routers/article"
	"likeadmin/admin/routers/common"
	"likeadmin/admin/routers/information"
	"likeadmin/admin/routers/monitor"
	"likeadmin/admin/routers/setting"
	"likeadmin/admin/routers/system"
	"likeadmin/core"
)

var InitRouters = []*core.GroupBase{
	// common
	common.AlbumGroup,
	common.IndexGroup,
	common.UploadGroup,
	// monitor
	monitor.MonitorGroup,
	// setting
	setting.CopyrightGroup,
	setting.DictDataGroup,
	setting.DictTypeGroup,
	setting.ProtocolGroup,
	setting.StorageGroup,
	setting.WebsiteGroup,
	// system
	system.AdminGroup,
	system.DeptGroup,
	system.LogGroup,
	system.LoginGroup,
	system.MenuGroup,
	system.RoleGroup,
	// article
	article.NewsGroup,
	// information
	information.WeaponsGroup,
	information.WeaponsSeriesGroup,
	information.HeroGroup,
	information.HeroTypeGroup,
	information.MapsGroup,
}
