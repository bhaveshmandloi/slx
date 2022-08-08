# -*- encoding: utf-8 -*-
# stub: protected_attributes_continued 1.5.0 ruby lib

Gem::Specification.new do |s|
  s.name = "protected_attributes_continued".freeze
  s.version = "1.5.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Weston Ganger".freeze]
  s.date = "2019-08-16"
  s.description = "Protect attributes from mass assignment".freeze
  s.email = ["weston@westonganger.com".freeze]
  s.homepage = "https://github.com/westonganger/protected_attributes_continued".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.3.13".freeze
  s.summary = "Protect attributes from mass assignment in Active Record models".freeze

  s.installed_by_version = "3.3.13" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<activemodel>.freeze, [">= 5.0"])
    s.add_development_dependency(%q<activerecord>.freeze, [">= 5.0"])
    s.add_development_dependency(%q<actionpack>.freeze, [">= 5.0"])
    s.add_development_dependency(%q<railties>.freeze, [">= 5.0"])
    s.add_development_dependency(%q<sqlite3>.freeze, [">= 0"])
    s.add_development_dependency(%q<mocha>.freeze, ["~> 1.4.0"])
    s.add_development_dependency(%q<appraisal>.freeze, [">= 0"])
  else
    s.add_dependency(%q<activemodel>.freeze, [">= 5.0"])
    s.add_dependency(%q<activerecord>.freeze, [">= 5.0"])
    s.add_dependency(%q<actionpack>.freeze, [">= 5.0"])
    s.add_dependency(%q<railties>.freeze, [">= 5.0"])
    s.add_dependency(%q<sqlite3>.freeze, [">= 0"])
    s.add_dependency(%q<mocha>.freeze, ["~> 1.4.0"])
    s.add_dependency(%q<appraisal>.freeze, [">= 0"])
  end
end
