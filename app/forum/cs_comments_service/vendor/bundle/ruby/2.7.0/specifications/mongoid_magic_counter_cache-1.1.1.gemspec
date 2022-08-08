# -*- encoding: utf-8 -*-
# stub: mongoid_magic_counter_cache 1.1.1 ruby lib

Gem::Specification.new do |s|
  s.name = "mongoid_magic_counter_cache".freeze
  s.version = "1.1.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Justin Herrick".freeze]
  s.date = "2015-03-02"
  s.description = "A quick and easy way to add counter cache functionality to model - document associations in Mongoid".freeze
  s.email = ["justin@justinherrick.com".freeze]
  s.homepage = "https://github.com/jah2488/mongoid-magic-counter-cache".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.3.13".freeze
  s.summary = "Setup Counter Caches in Mongoid Documents".freeze

  s.installed_by_version = "3.3.13" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<mongoid>.freeze, [">= 0"])
    s.add_runtime_dependency(%q<rake>.freeze, [">= 0"])
    s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
  else
    s.add_dependency(%q<mongoid>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<rspec>.freeze, [">= 0"])
  end
end
