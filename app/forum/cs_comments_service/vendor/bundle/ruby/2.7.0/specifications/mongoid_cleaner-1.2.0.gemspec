# -*- encoding: utf-8 -*-
# stub: mongoid_cleaner 1.2.0 ruby lib

Gem::Specification.new do |s|
  s.name = "mongoid_cleaner".freeze
  s.version = "1.2.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["TD Dashboys".freeze]
  s.date = "2015-12-24"
  s.email = ["dashboys@td-berlin.com".freeze]
  s.homepage = "https://github.com/td-berlin/mongoid_cleaner".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.3.13".freeze
  s.summary = "MongoidCleaner with drop and truncation strategy".freeze

  s.installed_by_version = "3.3.13" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<bundler>.freeze, ["~> 1.9"])
    s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_development_dependency(%q<rubocop>.freeze, ["~> 0.31"])
    s.add_runtime_dependency(%q<mongoid>.freeze, [">= 4.0"])
  else
    s.add_dependency(%q<bundler>.freeze, ["~> 1.9"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<rubocop>.freeze, ["~> 0.31"])
    s.add_dependency(%q<mongoid>.freeze, [">= 4.0"])
  end
end
