# -*- encoding: utf-8 -*-
# stub: delayed_job_mongoid 2.3.1 ruby lib

Gem::Specification.new do |s|
  s.name = "delayed_job_mongoid".freeze
  s.version = "2.3.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Chris Gaffney".freeze, "Brandon Keepers".freeze, "Erik Michaels-Ober".freeze]
  s.date = "2019-02-27"
  s.email = ["chris@collectiveidea.com".freeze, "brandon@opensoul.com".freeze, "sferik@gmail.com".freeze]
  s.homepage = "http://github.com/collectiveidea/delayed_job_mongoid".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.3.13".freeze
  s.summary = "Mongoid backend for delayed_job".freeze

  s.installed_by_version = "3.3.13" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<delayed_job>.freeze, [">= 3.0", "< 5"])
    s.add_runtime_dependency(%q<mongoid>.freeze, [">= 3.0", "< 8"])
    s.add_runtime_dependency(%q<mongoid-compatibility>.freeze, [">= 0.4.0"])
  else
    s.add_dependency(%q<delayed_job>.freeze, [">= 3.0", "< 5"])
    s.add_dependency(%q<mongoid>.freeze, [">= 3.0", "< 8"])
    s.add_dependency(%q<mongoid-compatibility>.freeze, [">= 0.4.0"])
  end
end
