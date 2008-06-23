Merb::Router.prepare do |r|
  r.match('/ping-track').to(:controller => 'analytics', :action => 'track')
  r.match('/').to(:controller => 'analytics', :action =>'index')
end

class Analytics < Merb::Controller

  def index
    render
  end

  def track
    remote_ip = request.env["REMOTE_ADDR"]
    reffer = request.env["HTTP_REFERER"]
    user_agent = request.env["HTTP_USER_AGENT"]
    render '0'
  end

end

Merb::Config.use { |c|
  c[:framework]           = {},
  c[:session_store]       = 'none',
  c[:exception_details]   = true
}
